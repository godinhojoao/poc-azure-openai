# Proof of concept: Azure OpenAI Service

- Some of the use cases of Azure OpenAi service.

## Table of Contents

- [Using Your Own Data](#using-your-own-data)
- [Integrating Azure OpenAI Service](#integrating-azure-openai-service)
- [Prerequisites](#prerequisites)
- [Installation and running the project](#installation-and-running-the-project)

## Using your own data

- One key feature of the Azure OpenAI Service is the ability to utilize your own data with the models. Follow the steps in the [Use Your Data Quickstart](https://learn.microsoft.com/en-us/azure/ai-services/openai/use-your-data-quickstart?tabs=command-line%2Cpython&pivots=programming-language-javascript).

## [Integrating Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview)

- You can integrate the Azure OpenAI Service into your project to benefit from its capabilities.
- This can be employed as an intelligent assistant or for other customized solutions.
  - [Building a virtual assistant using Azure OpenAI Service](https://techcommunity.microsoft.com/t5/educator-developer-blog/build-a-virtual-assistant-with-azure-open-ai-and-azure-speech/ba-p/3735636)

## Prerequisites

Before you begin, make sure you have the following tools and resources:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [Git](https://git-scm.com/)
- Azure OpenAI Service subscription. For more information, refer to [Azure OpenAI Service Overview](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview).

## Installation and running the project

1. Clone the repository:

   ```bash
   git clone <repository-url>
   cd poc-azure-openai
   ```

2. Install dependencies:

   ```bash
   nvm i 20
   nvm use
   npm install
   ```

3. Create your `.env` file following the `.env.example` file

4. Running the project:
   ```bash
   npm run dev
   ```
