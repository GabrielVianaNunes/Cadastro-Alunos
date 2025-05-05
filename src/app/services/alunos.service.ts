import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AlunosService {
  private alunos: string[] = [];

  getAlunos(): string[] {
    return this.alunos;
  }

  adicionarAluno(nome: string): void {
    if (nome.trim()) {
      this.alunos.push(nome);
    }
  }
}
