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
    const affiliateModule = await import(affiliateUrl);
    getAffiliateLink = affiliateModule.getAffiliateLink;
} catch (e) {
    console.warn("Affiliate module not found.");
}

async function runTest() {
    console.log("Running manual test for tool addition...");

    // Mock tool that matches our affiliate mapping
    const newTool = {
        "id": "perplexity-ai",
        "name": "Perplexity AI",
        "slug": "perplexity",
        "description": "An AI-powered search engine that provides direct answers to queries using various LLMs.",
        "shortDescription": "AI search and answer engine.",
        "category": "text-ai",
        "pricing": "Freemium",
        "price": "Free / $20/mo",
        "rating": 4.8,
        "views": "2.5M",
        "logo": "https://www.perplexity.ai/favicon.ico",
        "features": ["Source citation", "Real-time search", "Multiple models"],
        "website": "https://perplexity.ai",
        "addedDate": new Date().toISOString().split('T')[0],
        "isFeatured": false,
        "isTrending": true
    };

    // Inject Affiliate Link
    if (getAffiliateLink) {
        const affiliateUrl = getAffiliateLink(newTool.slug, newTool.website);
        if (affiliateUrl !== newTool.website) {
            console.log(`Affiliate logic matched! Injecting: ${affiliateUrl}`);
            newTool.affiliateLink = affiliateUrl;
            if (newTool.description) {
                newTool.description += ` Try it here: ${affiliateUrl}`;
            }
        }
    }

    // Update mockData.js
    const dataPath = path.resolve(__dirname, '../src/lib/mockData.js');
    let content = fs.readFileSync(dataPath, 'utf8');

    const toolsRegex = /export const tools = \[([\s\S]*?) \];/;
    const match = content.match(toolsRegex);

    if (match) {
        const toolsContent = match[1];
        // Check if already exists to prevent duplicates in test
        if (content.includes(`slug: 'perplexity'`)) {
            console.log("Tool already exists in mockData.js. Skipping update to avoid duplicates.");
            return;
        }
        const updatedToolsContent = toolsContent + `    ${JSON.stringify(newTool, null, 8)},\n`;
        content = content.replace(toolsRegex, `export const tools = [${updatedToolsContent} ];`);

        // Update stats
        const totalToolsMatch = content.match(/totalTools: (\d+)/);
        if (totalToolsMatch) {
            let total = parseInt(totalToolsMatch[1]) + 1;
            content = content.replace(/totalTools: \d+/, `totalTools: ${total}`);
        }

        fs.writeFileSync(dataPath, content);
        console.log("Successfully manually added Perplexity AI for verification!");
    }
}

runTest();
