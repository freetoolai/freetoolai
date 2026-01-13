import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
    try {
        console.log("Starting automation script...");
        // Force update to reset file state

        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is missing from environment variables.");
        }
        console.log("API Key Check: Present");

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash-latest" });

        const prompt = `Identify a real, popular AI tool launched or trending in 2024-2025. 
    Return ONLY a JSON object representing the tool, following this exact schema:
    {
        "id": "lowercase-id-no-spaces",
        "name": "Proper Name",
        "slug": "lowercase-slug",
        "description": "1-2 sentence description",
        "shortDescription": "Max 10 word catchphrase",
        "category": "One of: image-ai, text-ai, video-ai, audio-ai, code-ai, business-ai",
        "pricing": "Free, Paid, or Freemium",
        "price": "e.g. $10/mo or Free",
        "rating": 4.5,
        "views": "e.g. 100K",
        "logo": "https://img.logo.dev/placeholder.com?token=FIXME",
        "features": ["3 key features"],
        "website": "Valid URL",
        "addedDate": "YYYY-MM-DD",
        "isFeatured": false,
        "isTrending": true
    }`;

        console.log("Fetching new tool from Gemini...");
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        console.log("Raw Response from Gemini:", text);

        // Clean JSON output in case Gemini adds markdown backticks
        const jsonStr = text.replace(/```json|```/g, '').trim();
        const newTool = JSON.parse(jsonStr);

        console.log(`Parsed Tool: ${newTool.name}`);

        // Read mockData.js
        const dataPath = path.join(__dirname, '../src/lib/mockData.js');
        console.log(`Reading data from: ${dataPath}`);
        let content = fs.readFileSync(dataPath, 'utf8');

        // Add tool to tools array
        const toolsRegex = /export const tools = \[([\s\S]*?) \];/;
        const match = content.match(toolsRegex);

        if (match) {
            const toolsContent = match[1];
            const updatedToolsContent = toolsContent + `    ${JSON.stringify(newTool, null, 8)},\n`;
            content = content.replace(toolsRegex, `export const tools = [${updatedToolsContent} ];`);
            console.log("Tools array updated in memory.");
        } else {
            console.error("Critical: Could not find 'export const tools' array in mockData.js");
        }

        // Update stats
        const statsRegex = /export const stats = \{([\s\S]*?)\};/;
        const statsMatch = content.match(statsRegex);
        if (statsMatch) {
            const statsStr = statsMatch[1];
            let totalTools = parseInt(statsStr.match(/totalTools: (\d+)/)[1]);
            totalTools += 1;
            content = content.replace(/totalTools: \d+/, `totalTools: ${totalTools}`);
            content = content.replace(/lastUpdated: '.*'/, `lastUpdated: '${new Date().toLocaleDateString()}'`);
            console.log("Stats object updated in memory.");
        } else {
            console.error("Critical: Could not find 'export const stats' object in mockData.js");
        }

        fs.writeFileSync(dataPath, content);
        console.log("Successfully updated mockData.js");

    } catch (error) {
        console.error("Detailed Error during update:", error);
        if (error.response) {
            console.error("API Response Error details:", JSON.stringify(error.response, null, 2));
        }
        process.exit(1);
    }
}

run();