import express, { Application } from 'express'
import { ForecastController } from './controllers/forecast'
import { OpenAPIV3 } from 'express-openapi-validator/dist/framework/types'
import { Server } from '@overnightjs/core'
import * as http from 'http'
import * as OpenApiValidator from 'express-openapi-validator'
import swaggerUi from 'swagger-ui-express'
import apiSchema from './swagger.json'
import cors from 'cors'

export class SetupServer extends Server {
  private server?: http.Server

  constructor(private port = 3000) {
    super()
  }

  public init(): void {
    this.setupExpress()
    this.docsSetup()
    this.setupController()
  }

  private setupExpress(): void {
    this.app.use(express.json())
    this.app.use(express.urlencoded({ extended: true }))
    this.app.use(cors({ origin: '*' }))
  }

  private docsSetup(): void {
    this.app.use('/docs', swaggerUi.serve, swaggerUi.setup(apiSchema))
    this.app.use(
      OpenApiValidator.middleware({
        apiSpec: apiSchema as OpenAPIV3.Document,
        validateRequests: true, //we do it
        validateResponses: true
      })
    )
  }

  private setupController(): void {
    const forecastController = new ForecastController()
    this.addControllers([forecastController])
  }

  public getApp(): Application {
    return this.app
  }

  public async close(): Promise<void> {
    if (this.server) {
      await new Promise((resolve, reject) => {
        this.server?.close((err) => {
          if (err) {
            return reject(err)
          }
          resolve(true)
        })
      })
    }
  }

  public start(): void {
    this.server = this.app.listen(this.port, () => {
      console.log('Server listening on port: ' + this.port)
      // logger.info('Server listening on port: ' + this.port)
    })
  }
}
