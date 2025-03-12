import { Injectable } from '@nestjs/common';
import { GenAiResponse } from './response.interface';
import { Content, GoogleGenerativeAI } from '@google/generative-ai';

@Injectable()
export class PromptService {
  createContent(text: string): Content[] {
    return [
      {
        role: 'user',
        parts: [
          {
            text,
          },
        ],
      },
    ];
  }

  async generateText(prompt: string): Promise<GenAiResponse> {
    const APIKEY = process.env.GEMINI_API_KEY;
    const contents = this.createContent(prompt);
    const genAI = new GoogleGenerativeAI(APIKEY);
    const model = genAI.getGenerativeModel({ model: 'gemini-2.0-flash' });
    const result = await model.generateContent({ contents });
    const response = await result.response;
    const text = response.text();

    return { text };
  }
}
