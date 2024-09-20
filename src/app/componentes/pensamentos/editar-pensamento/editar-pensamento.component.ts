import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Pensamento } from '../pensamento';
import {
  FormGroup,
  FormsModule,
  NgModel,
  ReactiveFormsModule,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { PensamentoService } from '../pensamento.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-pensamento',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './editar-pensamento.component.html',
  styleUrl: './editar-pensamento.component.scss',
})
export class EditarPensamentoComponent implements OnInit {
  constructor(
    private service: PensamentoService,
    private router: Router,
    private route: ActivatedRoute,
    private fb: FormBuilder
  ) {}

  formulario!: FormGroup;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id')!;
    this.service.buscarPorId(id).subscribe((pensamento: Pensamento) => {
      this.initForm(pensamento, id);
    });
  }

  initForm(pensamento: Pensamento, id:string) {
    this.formulario = this.fb.group(
      {
        id: id,
        conteudo: [
          pensamento.conteudo,
          Validators.compose([
            Validators.required,
            Validators.pattern(/(.|\s)*\S(.|\s)*/),
          ]),
        ],
        autoria: [
          pensamento.autoria,
          [
            Validators.required,
            Validators.compose([
              Validators.minLength(3),
              Validators.pattern(/^[a-zà-ú\s]+$/),
            ]),
          ],
        ],
        modelo: [pensamento.modelo],
      },
      { updateOn: 'change' }
    );
  }

  pensamento: Pensamento = {
    id: '',
    conteudo: '',
    autoria: '',
    modelo: '',
    favorito: false
  };

  editarPensamento() {
    this.service
      .editarPensamento(this.formulario.value)
      .subscribe((data) => {
        this.router.navigate(['/pensamento/listar']);
      });
  }

  cancelar() {
    this.router.navigate(['/pensamento/listar']);
  }
}
