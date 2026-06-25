import { Component,  Input, Output, EventEmitter} from '@angular/core';
import { Producto } from '../../models/proyecto-card/proyecto-card';



@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css',
})
export class ProyectoCard {
    @Input() producto!: Producto;

  @Input() esFavorito: boolean = false;

  @Output() toggleFavorito = new EventEmitter<Producto>();

  toggle() {
    this.toggleFavorito.emit(this.producto);
  }
}
