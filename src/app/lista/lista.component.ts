import { Component } from '@angular/core';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-lista',
  templateUrl: './lista.component.html'
})
export class ListaComponent {
  constructor(public alunosService: AlunosService) {}
}
