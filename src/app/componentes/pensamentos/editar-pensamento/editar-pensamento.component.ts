import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import { FormsModule, NgModel } from '@angular/forms';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.scss',
})
export class EditarPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.buscarPorId(id).subscribe((pensamento: Pensamento) => {
      this.pensamento = pensamento;
      console.log(pensamento)
    });
  }

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
  };

  editarPensamento() {
    this.service.editarPensamento(this.pensamento.id!, this.pensamento).subscribe(data => {
      this.router.navigate(['/pensamento/listar'])
    })
  }

  cancelar() {}
}
