import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-info-projeto',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './info-projeto.component.html',
  styleUrls: ['./info-projeto.component.css']
})
export class InfoProjetoComponent {}
