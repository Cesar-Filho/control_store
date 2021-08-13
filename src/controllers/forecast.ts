import { Controller, Get } from '@overnightjs/core'
import { Request, Response } from 'express'

@Controller('forecast')
export class ForecastController {
  @Get('')
  public getForecastFortLoggedUser(_: Request, res: Response): void {
    res.send({ status: 'ok' })
  }
}
