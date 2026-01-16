import { GoogleGenerativeAI } from '@google/generative-ai';
import fs from 'fs';
import path from 'path';
import { fileURLToPath, pathToFileURL } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Import affiliate helper
const affiliatePath = path.resolve(__dirname, '../src/lib/affiliate.js');
let getAffiliateLink;
try {
    const affiliateUrl = pathToFileURL(affiliatePath).href;
    console.log(`Loading affiliate module from: ${affiliateUrl}`);
    const affiliateModule = await import(affiliateUrl);
    getAffiliateLink = affiliateModule.getAffiliateLink;
    console.log("Affiliate module loaded successfully.");
} catch (e) {
    console.warn("Affiliate module not found or failed to load:", e.message);
}

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function run() {
    try {
        console.log("Starting automation script...");

        if (!process.env.GEMINI_API_KEY) {
            throw new Error("GEMINI_API_KEY is missing from environment variables.");
        }

        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

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
        "logo": "https://www.google.com/s2/favicons?domain=" + website + "&sz=128",
        "screenshot": "",
        "features": ["3 key features"],
        "website": "Valid URL (e.g. https://example.com)",
        "addedDate": "YYYY-MM-DD",
        "isFeatured": false,
        "isTrending": true
    }`;

        console.log("Fetching new tool from Gemini...");
        const result = await model.generateContent(prompt);
        const response = await result.response;
        const text = response.text();

        // Clean JSON output
        const jsonStr = text.replace(/```json|```/g, '').trim();
        console.log("Gemini Response cleaned.");
        const newTool = JSON.parse(jsonStr);

        console.log(`New Tool Identified: ${newTool.name}`);

        // Inject Affiliate Link
        if (getAffiliateLink) {
            const affiliateUrl = getAffiliateLink(newTool.slug, newTool.website);
            if (affiliateUrl !== newTool.website) {
                console.log(`Affiliate logic matched! Injecting affiliate link: ${affiliateUrl}`);
                newTool.affiliateLink = affiliateUrl;

                if (newTool.description && !newTool.description.includes('Try it here')) {
                    newTool.description += ` Try it here: ${affiliateUrl}`;
                }
            }
        }

        // Read mockData.js
        const dataPath = path.resolve(__dirname, '../src/lib/mockData.js');
        let content = fs.readFileSync(dataPath, 'utf8');

        // Add tool to tools array
        const toolsRegex = /export const tools = \[([\s\S]*?) \];/;
        const match = content.match(toolsRegex);

        if (match) {
            const toolsContent = match[1];
            const updatedToolsContent = toolsContent + `    ${JSON.stringify(newTool, null, 8)},\n`;
            content = content.replace(toolsRegex, `export const tools = [${updatedToolsContent} ];`);
            console.log("Tools array updated.");
        } else {
            throw new Error("Could not find tools array in mockData.js");
        }

        // Update stats
        const statsRegex = /export const stats = \{([\s\S]*?)\};/;
        const statsMatch = content.match(statsRegex);
        if (statsMatch) {
            const statsStr = statsMatch[1];
            const totalToolsMatch = statsStr.match(/totalTools: (\d+)/);
            if (totalToolsMatch) {
                let totalTools = parseInt(totalToolsMatch[1]);
                totalTools += 1;
                content = content.replace(/totalTools: \d+/, `totalTools: ${totalTools}`);
            }
            content = content.replace(/lastUpdated: '.*'/, `lastUpdated: '${new Date().toLocaleDateString()}'`);
            console.log("Stats updated.");
        }

        fs.writeFileSync(dataPath, content);
        console.log("Successfully updated mockData.js with " + newTool.name);

    } catch (error) {
        console.error("Automation script failed:", error);
        process.exit(1);
    }
}

run();
