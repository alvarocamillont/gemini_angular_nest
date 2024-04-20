import { Routes } from '@angular/router';
import { PromptComponent } from './prompt/prompt.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'prompt' },
  {
    path: 'prompt',
    component: PromptComponent,
  },
  { path: '**', redirectTo: '/prompt' },
];
