import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Producto } from '../../models/proyecto-card/proyecto-card';
import { ProyectoCard} from '../../components/proyecto-card/proyecto-card';
import { RouterLink } from '@angular/router';



@Component({
  selector: 'app-producto-card',
  imports: [FormsModule, CommonModule, ProyectoCard

  ],
  templateUrl: './productos.html',
  styleUrl: './productos.css',
})
export class Productos {

    productos: Producto[] = [
    {
      nombre: 'Artemis I',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.MnLBIvIMec8LrIGyydkpmwHaEK?rs=1&pid=ImgDetMain&o=7&rm=3'
    },
    {
      nombre: 'SLS',
      imagen: 'https://c.files.bbci.co.uk/156F2/production/_110449778_mediaitem110449777.jpg'
    },
    {
      nombre: 'Artemis II',
      imagen: 'https://encolombia.com/wp-content/uploads/2022/12/Artemis-I-cohete-de-la-nasa.jpg'
    }
  ];

}
