import { GoogleGenerativeAI } from '@google/generative-ai';

const genAI = new GoogleGenerativeAI("AIzaSyDYvYqXYkvWJiiAphIBhxm3s3KmDqSOhvs");

async function checkKey() {
    try {
        const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });
        const result = await model.generateContent("Say hello");
        const response = await result.response;
        console.log("Gemini API Check: Success!");
        console.log("Response:", response.text());
    } catch (e) {
        console.error("Gemini API Check: Failed");
        console.error(e.message);
    }
}

checkKey();
