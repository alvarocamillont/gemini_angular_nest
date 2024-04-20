import { HttpClient } from '@angular/common/http';
import { Injectable, inject, signal } from '@angular/core';
import { GenAITextRequest, GenAITextResponse } from './gen-aitext-response';

const URL = 'http://localhost:3000/prompt/text';

@Injectable({
  providedIn: 'root',
})
export class PromptService {
  private http = inject(HttpClient);

  sendPrompt(prompt: GenAITextRequest) {
    return this.http.post<GenAITextResponse>(URL, prompt);
  }
}
