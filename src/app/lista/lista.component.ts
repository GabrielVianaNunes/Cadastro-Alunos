import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; // ✅ necessário para ngIf e ngFor
import { AlunosService } from '../services/alunos.service';

@Component({
  selector: 'app-lista',
  standalone: true,
  imports: [CommonModule], // ✅ adicionado
  templateUrl: './lista.component.html',
  styleUrls: ['./lista.component.css']
})
export class ListaComponent {
  constructor(public alunosService: AlunosService) {}
}
