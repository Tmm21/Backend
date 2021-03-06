import { controlHandler } from '../../utils'
import { RoutesController } from './routesController'
import express, { Request } from 'express'
import { authorize } from '../../middleware'

const call = controlHandler
const router = express.Router()
const Controller = new RoutesController()

router.post(
  '/',
  call(Controller.createRoute, (req, res) => [req.body]),
)
router.get(
  '/search',
  call(Controller.searchRoute, (req: Request, res) => [req.query]),
)
router.get(
  '/',
  authorize,
  call(Controller.getRoute, (req, res) => [req.user]),
)

export const RoutesRouter = router
