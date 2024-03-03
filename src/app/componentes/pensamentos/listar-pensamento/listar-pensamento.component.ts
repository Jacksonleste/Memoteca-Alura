import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { PensamentoComponent } from '../pensamento/pensamento.component';
@Component({
  selector: 'app-listar-pensamento',
  standalone: true,
  imports: [CommonModule, RouterLink, PensamentoComponent],
  templateUrl: './listar-pensamento.component.html',
  styleUrl: './listar-pensamento.component.scss',
})
export class ListarPensamentoComponent {
  listaPensamentos = [
    {
      conteudo: 'pensamento teste',
      autoria: 'Jackson',
      modelo: 'modelo1',
    },
    {
      conteudo:
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam a pulvinar quam, sed faucibus erat. Maecenas suscipit felis dolor, id hendrerit felis tincidunt eu. Nulla at mauris sed nulla lacinia tempor a vel nulla. In euismod turpis urna, et lobortis nisi ornare sit amet. Interdum et malesuada fames ac ante ipsum primis in faucibus. Morbi consectetur, dui ac maximus cursus, mauris ex rutrum odio, id pretium tortor ex sed urna. Aliquam dapibus id dolor ac placerat. Ut pulvinar, tortor id lobortis bibendum, est nisl molestie leo, in vulputate mauris dui sit amet eros. Vivamus lacus orci, egestas vitae eleifend ut, molestie at enim. Donec non lacus id urna dignissim efficitur vitae a elit. Duis ac tortor quis orci molestie interdum. Integer congue nunc id quam commodo eleifend et in nisl. Duis eget mollis magna. Aliquam placerat pretium velit, eget condimentum ligula interdum a. Nulla vel dolor eu ex feugiat vestibulum vel sit amet enim.',
      autoria: 'Lorem Ipsum',
      modelo: 'modelo2',
    },
    {
      conteudo: 'I love Angular',
      autoria: 'Jackson',
      modelo: 'modelo2',
    },
  ];
}
