import express, { Application, NextFunction, Request, Response } from 'express'
import dotenv from 'dotenv'
dotenv.config()
import configureMiddlewares from './middlewares'
import chatRouter from './routes/chat.route'

const app = express()
const port = process.env.PORT || 3000
configureMiddlewares(app)

console.log('process.env.OPENAI_API_KEY', process.env.OPENAI_API_KEY)

app.get('/', (req: Request, res: Response) => {
    res.send('Hello, TypeScript Express!!!')
})
app.use('/api/v1', chatRouter())

app.use((err: Error, req: Request, res: Response, next: NextFunction): void => {
    console.error(err.stack)
    res.status(500).send('Something went wrong')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`)
})
