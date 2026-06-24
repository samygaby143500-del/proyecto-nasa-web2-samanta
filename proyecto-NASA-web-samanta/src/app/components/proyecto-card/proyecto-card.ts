import { Component,  Input} from '@angular/core';
import { Producto } from '../../models/proyecto-card/proyecto-card';


@Component({
  selector: 'app-proyecto-card',
  imports: [],
  templateUrl: './proyecto-card.html',
  styleUrl: './proyecto-card.css',
})
export class ProyectoCard {
  @Input() producto: any;
}
