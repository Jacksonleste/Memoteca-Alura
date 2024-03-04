import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.scss',
})
export class CriarPensamentoComponent {
  constructor(private service: PensamentoService, private router: Router) {}

  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  criarPensamento() {
    let pensamento = this.service
      .cadastrarPensamento(this.pensamento)
      .subscribe(() => {
        this.router.navigate(['/pensamento/listar']);
      });
  }

  cancelar() {
    this.router.navigate(['/pensamento/listar']);
  }
}
