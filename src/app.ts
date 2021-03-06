import express from 'express'
import 'reflect-metadata'
import { createConnection } from 'typeorm-plus'
import { logger } from './utils/logger'
//   import {BASE_PATH } from "./config";

import { errorHandler, global } from './middleware'
import {
  stateRouter,
  LgaRouter,
  TerminalRouter,
  RoutesRouter,
  TripRouter,
  VehicleFeatureRouter,
  VehicleTypeRouter,
  BookingRouter,
  RoleRouter,
  VehicleRouter,
  AuthRouter,
  PriviledgeRouter,
  userRouter,
  CaptainRouter,
  locationRouter,
} from './api'

class App {
  public express = express()
  // public basePath = BASE_PATH || '';

  constructor() {
    this.boot()
  }
  private boot() {
    this.initializeDB()
    this.registerMiddlewares()
    this.Routers()
    this.handleUncaughtError()
  }

  private registerMiddlewares() {
    global(this.express)
  }
  private Routers() {
    this.express.use('/states', stateRouter)
    this.express.use('/terminals', TerminalRouter)
    this.express.use('/routes', RoutesRouter)
    this.express.use('/trip', TripRouter)
    this.express.use('/vehiclefeatures', VehicleFeatureRouter)
    this.express.use('/vehicleTypes', VehicleTypeRouter)
    this.express.use('/roles', RoleRouter)
    this.express.use('/bookings', BookingRouter)
    this.express.use('/vehicle', VehicleRouter)
    this.express.use('/auth', AuthRouter)
    this.express.use('/priviledge', PriviledgeRouter)
    this.express.use('/location', locationRouter)
    // this.express.use(authorize)
    this.express.use('/lga', LgaRouter)
    this.express.use('/user', userRouter)
    this.express.use('/captainfee', CaptainRouter)
  }

  private async initializeDB() {
    try {
      //   await createConnection()
      // await createConnection({
      //     type:"mysql",
      //     host:DB_HOST,
      //     port:3306,
      //     username:DB_USER,
      //     password:DB_PASSWORD,
      //     database:DB_NAME,
      //     synchronize:false,
      //     entities:['**/api/**/*Model.js'],
      //     migrations:['/src/db/migrations/**.ts'],
      //     cli:{
      //         "migrationsDir":"src/migration"
      //     }

      // })
      await createConnection()
      //   {
      //     "type":"mysql",
      //     "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
      //     "port":3306,
      //     "username":"admin",
      //     "password":"okechukwu26",
      //     "database":"Motor",
      //     "synchronize":false,
      //     "logging":false,
      //    "entities":["**/api/**/*Model.{js, ts}"],
      //     "migrations":["src/migration/*.ts"],
      //     "cli":{
      //         "migrationsDir":"src/migration"
      //     }
      // }
      //   {
      //     type:"mysql",
      //     host:"localhost",
      //     username:"root",
      //     password:"Okechukwuemordi26",
      //     database:"miracle",
      //     synchronize:false,
      //     entities:['**/api/**/*Model.js'],
      //     migrations:['/src/db/migrations/**.ts'],
      //     cli:{
      //         "migrationsDir":"src/migration"
      //     }

      // }

      logger.info('Database connection was succesful')
    } catch (error) {
      throw new Error('unable to connect to database ' + error)
    }
  }
  private handleUncaughtError() {
    process.on('unhandledRejection', (reason, promise) => {
      throw reason
    })

    process.on('uncaughtException', (error) => {
      logger.error(
        `Uncaught Exception: ${500} - ${error.message}, Stack: ${error.stack}`,
      )
      process.exit(1)
    })

    process.on('SIGINT', () => {
      logger.info(' Alright! Bye bye!')
      process.exit()
    })

    this.express.use(errorHandler)
  }
}

const app = new App().express

export default app

// {
//         "type":"mysql",
//         "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
//         "port":3306,
//         "username":"admin",
//         "password":"okechukwu26",
//         "database":"miracle",
//         "synchronize":false,
//         "logging":false,
//        "entities":["**/api/**/*Model.ts"],
//         "migrations":["src/migration/*.ts"],
//         "cli":{
//             "migrationsDir":"src/migration"
//         }
//     }

// {
//   "type":"mysql",
//   "host":"aws-test.c6jrsctnu0a8.eu-west-2.rds.amazonaws.com",
//   "port":3306,
//   "username":"admin",
//   "password":"okechukwu26",
//   "database":"Motor",
//   "synchronize":false,
//   "logging":false,
//  "entities":["**/api/**/*Model.ts"],
//   "migrations":["src/migration/*.ts"],
//   "cli":{
//       "migrationsDir":"src/migration"
//   }
// }

// {
//   "type":"mysql",
//   "host":"localhost",
//   "username":"root",
//   "password":"Okechukwuemordi26",
//   "database":"miracle",
//   "logging":false,
//   "synchronize":false,
//   "entities":["**/api/**/*Model.ts"],
//   "migrations":["src/migration/*.ts"],
//   "cli":{
//       "migrationsDir":"src/migration"
//   }

// }

// MYSQL_ADDON_HOST=brqmm8vkexfo1wjzmitu-mysql.services.clever-cloud.com
// MYSQL_ADDON_DB=brqmm8vkexfo1wjzmitu
// MYSQL_ADDON_USER=ua0gehhrcl7ahtad
// MYSQL_ADDON_PORT=3306
// MYSQL_ADDON_PASSWORD=a0jmCQdOydx8vQF0jC6p
// MYSQL_ADDON_URI=mysql://ua0gehhrcl7ahtad:a0jmCQdOydx8vQF0jC6p@brqmm8vkexfo1wjzmitu-mysql.services.clever-cloud.com:3306/brqmm8vkexfo1wjzmitu
