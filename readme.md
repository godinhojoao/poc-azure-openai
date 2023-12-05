# Proof of concept: Azure OpenAI Service

- Welcome to this guide where we'll show you some use cases and how to use the Azure OpenAI Service. Whether you're building an intelligent assistant or crafting customized solutions, this proof of concept (PoC) will guide you through the process. Let's get started!

## Table of Contents

- [Prerequisites](#prerequisites)
- [Installation and running the project](#installation-and-running-the-project)
- [What is Azure OpenAI Service?](#what-is-azure-openai-service)
- [Azure OpenAI vs OpenAI](#azure-openai-vs-openai)
- [Some of the use cases of Azure OpenAi Service](#some-of-the-use-cases-of-azure-openai-service)
  - [Using Your Own Data](#using-your-own-data)
  - [Integrating Azure OpenAI Service](#integrating-azure-openai-service)
- [Read more at](#read-more-at)

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

## What is Azure OpenAI Service?

- A strong tool that easily combines OpenAI models with Azure.
- It gives developers the ability to use advanced AI features for understanding language, completing chat interactions, and more.

## Azure OpenAI vs OpenAI

- The Azure OpenAI Service, similar to OpenAI, offers customers advanced language AI powered by OpenAI GPT-4 and GPT-3.
- The thing that makes Azure different is that you get the safety features of Microsoft Azure while using the same models as OpenAI.
  - Azure OpenAI offers private networking, regional availability, and responsible AI content filtering.

## Some of the use cases of Azure OpenAi Service

- ### Using your own data

  - One key feature of the Azure OpenAI Service is the ability to utilize your own data with the models. Follow the steps in the [Use Your Data Quickstart](https://learn.microsoft.com/en-us/azure/ai-services/openai/use-your-data-quickstart?tabs=command-line%2Cpython&pivots=programming-language-javascript).

- ### [Integrating Azure OpenAI Service](https://learn.microsoft.com/en-us/azure/ai-services/openai/overview)
  - You can integrate the Azure OpenAI Service into your project to benefit from its capabilities.
  - This can be employed as an intelligent assistant or for other customized solutions.
  - [Building a virtual assistant using Azure OpenAI Service](https://techcommunity.microsoft.com/t5/educator-developer-blog/build-a-virtual-assistant-with-azure-open-ai-and-azure-speech/ba-p/3735636)

### Read More at:

- [Azure OpenAI Service Documentation](https://learn.microsoft.com/en-us/azure/ai-services/openai/)

## Thanks for Reading!

- Thanks for reading. I hope you've gained insights into enhancing the user experience by integrating this powerful service as customized support within your application.
- If you have any questions, feedback, or suggestions, feel free to reach out. Your engagement is appreciated!
