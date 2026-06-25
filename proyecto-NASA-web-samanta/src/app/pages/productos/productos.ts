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
      id: 1,
      nombre: 'Artemis I',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.MnLBIvIMec8LrIGyydkpmwHaEK'
    },
    {
      id: 2,
      nombre: 'SLS',
      imagen: 'https://c.files.bbci.co.uk/156F2/production/_110449778_mediaitem110449777.jpg'
    },
    {
      id: 3,
      nombre: 'Artemis II',
      imagen: 'https://encolombia.com/wp-content/uploads/2022/12/Artemis-I-cohete-de-la-nasa.jpg'
    },
    {
      id: 4,
      nombre: 'Artemis I',
      imagen: 'https://tse1.mm.bing.net/th/id/OIP.MnLBIvIMec8LrIGyydkpmwHaEK'
    },
    {
      id: 5,
      nombre: 'SLS',
      imagen: 'https://c.files.bbci.co.uk/156F2/production/_110449778_mediaitem110449777.jpg'
    },
    {
      id: 6,
      nombre: 'Artemis II',
      imagen: 'https://encolombia.com/wp-content/uploads/2022/12/Artemis-I-cohete-de-la-nasa.jpg'
    }
  ];

  favoritos: Producto[] = [];

  toggleFavorito(producto: Producto) {

    const existe = this.favoritos.some(f => f.id === producto.id);

    if (existe) {
      this.favoritos = this.favoritos.filter(f => f.id !== producto.id);
    } else {
      this.favoritos.push(producto);
    }
  }

  esFavorito(producto: Producto): boolean {
    return this.favoritos.some(f => f.id === producto.id);
  }
}
