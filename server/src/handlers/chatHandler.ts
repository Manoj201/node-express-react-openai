import { OpenAiService } from '../services/openai'

class chatHandler {
    openAiService: OpenAiService

    constructor() {
        this.openAiService = new OpenAiService()
    }

    async ingest(data: any) {
        return this.openAiService.ingestFile(data)
    }

    async chat(userInput: string) {
        return this.openAiService.call(userInput)
    }
}

export { chatHandler }
