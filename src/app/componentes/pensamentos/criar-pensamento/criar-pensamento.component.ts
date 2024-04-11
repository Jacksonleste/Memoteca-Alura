import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { Pensamento } from '../pensamento';
import { PensamentoService } from '../pensamento.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-criar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, ReactiveFormsModule],
  templateUrl: './criar-pensamento.component.html',
  styleUrl: './criar-pensamento.component.scss',
})
export class CriarPensamentoComponent implements OnInit {
  pensamento: Pensamento = {
    conteudo: '',
    autoria: '',
    modelo: 'modelo1',
  };

  formulario!: FormGroup;

  constructor(
    private service: PensamentoService,
    private router: Router,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit():void
  {
    this.formulario = this.formBuilder.group({
      conteudo: ['teste conteudo'],
      autoria: ['Eu  mesmo'],
      modeloCard: ['modelo2']
    })
  }

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
