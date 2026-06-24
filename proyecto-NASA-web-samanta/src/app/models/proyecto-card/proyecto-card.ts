import { Component } from '@angular/core';
import { CommonModule} from '@angular/common'



// noticia.model.ts

export interface Mision {
  nombre: string;
  descripcion: string;
  imagen: string;
}


@Component({
  selector: 'app-proyecto-card',
  imports: [CommonModule],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css',
})
export class ProyectoCard {}
