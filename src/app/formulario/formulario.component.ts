import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ListaComponent } from '../lista/lista.component';
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-formulario',
  standalone: true,
  imports: [CommonModule, FormsModule, ListaComponent],
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {
  nome: string = '';

  constructor(private alunosService: AlunosService) {}

  salvar() {
    const nomeLimpo = this.nome.trim();
    if (nomeLimpo) {
      this.alunosService.adicionarAluno(nomeLimpo);
      this.nome = '';
    }
  }
}
