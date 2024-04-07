import { GoogleGenerativeAI } from '@google/generative-ai';
import { Injectable } from '@nestjs/common';

const APIKEY = process.env.GEMINI_API_KEY;
@Injectable()
export class ChatService {
  async generateContentAPI() {
    console.log(APIKEY);
    const genAI = new GoogleGenerativeAI(APIKEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-pro' });
    const prompt = 'Write a story about a magic backpack.';
    const result = await model.generateContent(prompt);
    const response = await result.response;
    return response.text();
  }
}
