import express, { Request, Response, Router } from 'express'
import multer from 'multer'
import { chatHandler } from '../handlers/chatHandler'

const upload = multer({ dest: 'uploads/' })
const router = express.Router()
const chatService = new chatHandler()

const chatRouter = (): Router => {
    router.post('/chat', async (req: Request, res: Response) => {
        const response = await chatService.chat(req.body.userInput)
        res.send(response)
    })

    router.post('/ingest', upload.single('file'), async (req: Request, res: Response) => {
        if (!req.file) {
            res.status(400).send('No file uploaded.')
            return
        }
        const response = await chatService.ingest({
            file: req.file,
        })
        res.send(response)
    })

    return router
}

export default chatRouter
