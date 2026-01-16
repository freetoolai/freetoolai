import fs from 'fs';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dataPath = path.resolve(__dirname, '../src/lib/mockData.js');
let content = fs.readFileSync(dataPath, 'utf8');

const newToolEntry = `    {
        id: 'perplexity-ai',
        name: 'Perplexity AI',
        slug: 'perplexity',
        description: 'An AI-powered search engine that provides direct answers to queries using various LLMs. Try it here: https://perplexity.ai?ref=freetoolai',
        shortDescription: 'AI search and answer engine.',
        category: 'text-ai',
        pricing: 'Freemium',
        price: 'Free / $20/mo',
        rating: 4.8,
        views: '2.5M',
        logo: 'https://www.perplexity.ai/favicon.ico',
        features: ['Source citation', 'Real-time search', 'Multiple models'],
        website: 'https://perplexity.ai',
        affiliateLink: 'https://perplexity.ai?ref=freetoolai',
        addedDate: '2026-01-16',
        isFeatured: false,
        isTrending: true,
    },
];`;

if (!content.includes("'perplexity'")) {
    content = content.replace('];', newToolEntry);
    fs.writeFileSync(dataPath, content);
    console.log("SUCCESS: Added Perplexity AI to mockData.js");
} else {
    console.log("Perplexity already exists.");
}
