import { Component, input } from '@angular/core';

@Component({
    selector: 'app-resultado',
    imports: [],
    templateUrl: './resultado.component.html',
    styleUrl: './resultado.component.css'
})
export class ResultadoComponent {
  resultado = input('');
}
