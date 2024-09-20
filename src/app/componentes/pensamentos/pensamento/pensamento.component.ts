import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import { Router, RouterLink } from '@angular/router';
import { PensamentoService } from '../pensamento.service';

@Component({
  selector: 'app-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink],
  templateUrl: './pensamento.component.html',
  styleUrl: './pensamento.component.scss',
})
export class PensamentoComponent {
  @Input() pensamento!: Pensamento;

  constructor(private router: Router, private service: PensamentoService) {}

  larguraPensamento(): string {
    if (this.pensamento.conteudo.length >= 256) {
      return 'pensamento-g';
    }

    return 'pensamento-p';
  }

  mudarIconeFavorito(favorito: boolean) {
    if (favorito) return 'ativo';
    return 'inativo';
  }

  favoritarItem() {
    this.service.alternarFavorito(this.pensamento).subscribe(() => {
      this.router.navigate(['/pensamento/listar']);
    });
  }
}
