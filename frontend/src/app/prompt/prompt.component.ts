import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from './resultado/resultado.component';
import { PromptService } from './prompt.service';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [FormsModule, ResultadoComponent],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css',
})
export class PromptComponent {
  promptService = inject(PromptService);

  prompt: string = '';
  resultados = signal(['']);

  buscar() {
    const promptRequest = { prompt: this.prompt };
    this.promptService
      .sendPrompt(promptRequest)
      .subscribe((response) =>
        this.resultados.update((resultados) => [...resultados, response.text])
      );
  }
}
