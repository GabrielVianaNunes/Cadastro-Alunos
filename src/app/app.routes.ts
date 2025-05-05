import { Routes } from '@angular/router';
import { FormularioComponent } from './formulario/formulario.component';
import { InfoProjetoComponent } from './info-projeto/info-projeto.component';

export const routes: Routes = [
  { path: '', redirectTo: 'formulario', pathMatch: 'full' }, // Redirecionamento padrão
  { path: 'formulario', component: FormularioComponent },
  { path: 'info', component: InfoProjetoComponent }
];
