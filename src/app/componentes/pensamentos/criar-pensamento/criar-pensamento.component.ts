import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.scss',
})
export class CriarPensamentoComponent {
  pensamento = {
    id: '1',
    conteudo: 'Aprendendo Angular',
    autoria: 'Dev',
    modelo: '',
  };
}
