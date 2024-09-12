import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink, PensamentoComponent],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss',
})
export class ListarPensamentoComponent {
  listaPensamentos: Pensamento[] = [];
  pagina = '0'

  constructor(private service: PensamentoService) {}

  ngOnInit(): void {
    this.service.listarPensamentos(this.pagina).subscribe((pensamentos: Pensamento[]) => {
      this.listaPensamentos = pensamentos;
    });
  }
}
