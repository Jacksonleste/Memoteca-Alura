import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink, PensamentoComponent],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss',
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'pensamento teste',
      autoria: 'Jackson',
      modelo: 'modelo1',
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Jackson',
      modelo: 'modelo2',
    },
  ];
}
