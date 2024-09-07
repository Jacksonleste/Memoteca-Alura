import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import {
  FormsModule,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
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

  ngOnInit(): void {
    this.formulario = this.formBuilder.group(
      {
        conteudo: [
          '',
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        autoria: [
          '',
          Validators.compose([Validators.required, Validators.minLength(3)]),
        ],
        modelo: ['modelo1'],
      },
      { updateOn: 'change' }
    );
  }

  criarPensamento() {
    console.log(this.formulario.value);
    if (this.formulario.valid) {
      this.service.cadastrarPensamento(this.formulario.value).subscribe(() => {
        this.router.navigate(['/pensamento/listar']);
      });
    } else {
      console.log('Formulário inválido!');
    }
  }

  cancelar() {
    this.router.navigate(['/pensamento/listar']);
  }
}
