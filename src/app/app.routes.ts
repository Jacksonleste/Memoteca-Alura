import { Routes } from '@angular/router';
import { CriarPensamentoComponent } from './componentes/pensamentos/criar-pensamento/criar-pensamento.component';
import { ListarPensamentoComponent } from './componentes/pensamentos/listar-pensamento/listar-pensamento.component';

export const routes: Routes = [
  { path: '', redirectTo: 'pensamento/listar', pathMatch: 'full' },
  { path: 'pensamento/listar', component: ListarPensamentoComponent },
  { path: 'pensamento/criar', component: CriarPensamentoComponent },
];
