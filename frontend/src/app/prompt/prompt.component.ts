import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ResultadoComponent } from '../resultado/resultado.component';

@Component({
  selector: 'app-prompt',
  standalone: true,
  imports: [FormsModule, ResultadoComponent],
  templateUrl: './prompt.component.html',
  styleUrl: './prompt.component.css',
})
export class PromptComponent {
  consulta: string = '';
  resultados = signal(['']);

  buscar() {
    this.resultados.update((resultados) => [...resultados, 'TESTESSSS']);
  }
}
