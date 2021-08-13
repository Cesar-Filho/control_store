/* eslint-disable no-unused-vars */
import { SetupServer } from './server'

enum ExitStatus {
  Failure = 1,
  Success = 0
}

async function initialize(): Promise<void> {
  try {
    const server = new SetupServer(3000)
    await server.init()
    server.start()

    const exitSignals: NodeJS.Signals[] = ['SIGINT', 'SIGTERM', 'SIGQUIT']
    for (const exitSignal of exitSignals) {
      process.on(exitSignal, async () => {
        try {
          await server.close()
          console.log('App exited with success')
          process.exit(ExitStatus.Success)
        } catch (error) {
          console.error(`App exited with error: ${error}`)
          process.exit(ExitStatus.Failure)
        }
      })
    }
  } catch (error) {
    console.error(`App exited with error: ${error}`)
    process.exit(ExitStatus.Failure)
  }
}

initialize()
