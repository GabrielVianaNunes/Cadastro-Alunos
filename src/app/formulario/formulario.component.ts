import { Component } from '@angular/core';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';

  constructor(private alunosService: AlunosService) {}

  salvar(): void {
    if (this.nome.trim()) {
      this.alunosService.adicionarAluno(this.nome.trim());
      this.nome = '';
    }
  }
}
