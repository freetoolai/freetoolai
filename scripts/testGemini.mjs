import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);

async function testModels() {
    const modelNames = [
        'gemini-pro',
        'gemini-1.5-flash',
        'gemini-1.5-flash-latest',
        'gemini-1.5-flash-001',
        'models/gemini-1.5-flash',
        'models/gemini-pro'
    ];

    console.log('Testing available models...\n');

    for (const modelName of modelNames) {
        try {
            console.log(`Testing: ${modelName}`);
            const model = genAI.getGenerativeModel({ model: modelName });
            const result = await model.generateContent('Say "test successful"');
            const response = await result.response;
            console.log(`✅ SUCCESS: ${modelName}`);
            console.log(`Response: ${response.text()}\n`);
            break; // Stop after first success
        } catch (error) {
            console.log(`❌ FAILED: ${modelName}`);
            console.log(`Error: ${error.message}\n`);
        }
    }
}

testModels();
