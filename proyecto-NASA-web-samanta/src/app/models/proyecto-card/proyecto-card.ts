import { Component, Input } from '@angular/core';
import { CommonModule} from '@angular/common'
import { NgModule } from '@angular/core';

// noticia.model.ts

export interface Mision {
  nombre: string;
  descripcion: string;
  imagen: string;
}

export interface Producto {
  id: number;
  nombre: string;
  imagen: string;
 
}

export interface Programa {

  titulo: string;
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
