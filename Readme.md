# CV Scanning Sample App with Node, Express, and OpenAI

This is a sample application that demonstrates how to use Node.js, Express, and OpenAI to scan and analyze CVs. The application allows you to upload a CV in PDF format and ask questions about the CV through a chatbot.

## Prerequisites

- Node.js
- Docker
- An OpenAI API key

## Getting Started

Follow these steps to run the application locally:

1. **Clone the repository:**

   ```bash
   git clone https://github.com/Manoj201/node-express-react-openai.git
   cd node-express-react-openai
   ```

2. **Set up the OpenAI API key:**

   Generate a valid OpenAI API key and add it to the `server/.env` file. For example:

   ```bash
   OPENAI_API_KEY=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
   ```

3. **Build and run the Docker containers:**

   In the project root directory, execute the following command:

   ```bash
   docker-compose up --build
   ```

4. **Access the application:**

   Open your web browser and navigate to `http://localhost:8080`.

5. **Upload a CV:**

   Upload a CV in PDF format.

6. **Interact with the chatbot:**

   You can now ask the chatbot questions about the uploaded CV.

Enjoy using the application! Manoj Gamachchige
