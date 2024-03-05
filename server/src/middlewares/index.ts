import helmet from 'helmet'
import bodyParser from 'body-parser'
import { Request, Response, NextFunction, Application } from 'express'

const configureMiddlewares = (app: Application) => {
    app.use(helmet())
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: true }))

    app.use((_req: Request, res: Response, next: NextFunction) => {
        res.header('Access-Control-Allow-Origin', '*')
        res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization')
        res.header('Access-Control-Allow-Methods', 'GET, POST, PUT, PATCH,' + ' DELETE, HEAD, OPTIONS')
        next()
    })
}

export default configureMiddlewares
