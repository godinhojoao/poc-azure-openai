const { OpenAIClient, AzureKeyCredential } = require("@azure/openai");
const endpoint = process.env["AZURE_OPENAI_ENDPOINT"];
const azureApiKey = process.env["AZURE_OPENAI_KEY"];
const deploymentId = process.env["DEPLOYMENT_ID"];

const messages = [
  { role: "assistant", content: "give me the number that is the result of this operation 2 + 2." },
];

async function main() {
  console.log("== Chat Completions Sample ==");

  const client = new OpenAIClient(endpoint, new AzureKeyCredential(azureApiKey));
  const result = await client.getChatCompletions(deploymentId, messages);
  console.log('result.choices', result.choices)
}

main().catch((err) => {
  console.error("The sample encountered an error:", err);
});

module.exports = { main };