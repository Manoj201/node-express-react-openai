import path from 'path'
import { MemoryVectorStore } from 'langchain/vectorstores/memory'
import { RetrievalQAChain } from 'langchain/chains'
import { OpenAIEmbeddings } from '@langchain/openai'
import { ContextualCompressionRetriever } from 'langchain/retrievers/contextual_compression'
import { LLMChainExtractor } from 'langchain/retrievers/document_compressors/chain_extract'
import { ConversationChain } from 'langchain/chains'
import { PromptTemplate } from '@langchain/core/prompts'
import { ConversationSummaryMemory } from 'langchain/memory'
import { OpenAI } from '@langchain/openai'
import { getFileLoader } from '../util/documentLoader'

class OpenAiService {
    model: any
    prompt: any
    memory: any
    vectorStore: any
    retriever: any
    chain: any

    constructor() {
        this.model = new OpenAI({
            temperature: 0,
            verbose: true,
        })
        this.prompt =
            PromptTemplate.fromTemplate(`The following is a friendly conversation between a human and an AI. The AI is talkative and provides lots of specific details from its context. If the AI does not know the answer to a question, it truthfully says it does not know.

    Relevant pieces of previous conversation:
    {history}

    (You do not need to use these pieces of information if not relevant)

    Current conversation:
    Human: {input}
    AI:`)

        this.memory = new ConversationSummaryMemory({ llm: this.model, returnMessages: true })
        this.vectorStore
        this.retriever
        this.chain
    }

    assembleChain() {
        if (this.chain) return { chain: this.chain, inputType: 'query', responseType: 'text' }

        const chain = new ConversationChain({
            memory: this.memory,
            prompt: this.prompt,
            llm: this.model,
        })
        return { chain, inputType: 'input', responseType: 'response' }
    }

    async ingestFile(data: any) {
        const { file } = data
        const { originalname, path: pathName } = file

        const fileExtension = path.extname(originalname)

        const loader = getFileLoader('.pdf', pathName)
        if (!loader) {
            throw Error('bad')
        }

        const docs = await loader.load()

        const baseCompressor = LLMChainExtractor.fromLLM(this.model)
        this.vectorStore = await MemoryVectorStore.fromDocuments(docs, new OpenAIEmbeddings())
        this.retriever = new ContextualCompressionRetriever({
            baseCompressor,
            baseRetriever: this.vectorStore.asRetriever(),
        })

        this.chain = RetrievalQAChain.fromLLM(this.model, this.retriever, { returnSourceDocuments: true })
        return { success: true }
    }

    call = async (userInput: string) => {
        const { chain, inputType } = this.assembleChain()

        const res = await chain.call({
            [inputType]: userInput,
        })

        return res
    }
}

export { OpenAiService }
