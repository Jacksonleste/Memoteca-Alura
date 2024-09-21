import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { BotaoCarregarMaisComponent } from './botao-carregar-mais/botao-carregar-mais.component';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    PensamentoComponent,
    BotaoCarregarMaisComponent,
    FormsModule,
  ],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss',
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  pagina: number = 1;
  haMaisPensamentos: boolean = true;
  filtro: string = '';

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.listarPensamentos();
  }

  listarPensamentos() {
    this.pagina = 1;
    this.haMaisPensamentos = true;
    this.service
      .listarPensamentos(this.pagina)
      .subscribe((pensamentos: Pensamento[]) => {
        this.listaPensamentos = pensamentos;
      });
  }

  carregarMaisPensamentos() {
    this.service
      .listarPensamentos(++this.pagina, this.filtro)
      .subscribe((pensamentos: Pensamento[]) => {
        this.listaPensamentos.push(...pensamentos);
        if (pensamentos.length == 0) {
          this.haMaisPensamentos = false;
        }
      });
  }

  buscarPensamentos() {
    this.pagina = 1;
    this.haMaisPensamentos = true;
    this.service
      .listarPensamentos(this.pagina, this.filtro)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }

  verFavoritos() {
    this.pagina = 1;
    this.haMaisPensamentos = true;
    this.service
      .listarPensamentosFavoritos(this.pagina, this.filtro)
      .subscribe((pensamentos) => {
        this.listaPensamentos = pensamentos;
      });
  }
}
