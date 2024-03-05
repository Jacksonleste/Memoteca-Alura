import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { PensamentoService } from '../pensamento.service';
import { Pensamento } from '../pensamento';

@Component({
  selector: 'app-excluir-pensamento',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './excluir-pensamento.component.html',
  styleUrl: './excluir-pensamento.component.scss',
})
export class ExcluirPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.buscarPorId(id).subscribe((pensamento: Pensamento) => {
      this.pensamento = pensamento;
      console.log(pensamento);
    });
  }

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  excluirPensamento() {
    console.log(this.pensamento.id);
    if (this.pensamento.id) {
      this.service.excluirPensamento(this.pensamento.id).subscribe(() => {
        this.router.navigate(['/pensamento/listar']);
      });
    }
  }

  cancelar() {
    this.router.navigate(['/pensamento/listar']);
  }
}
