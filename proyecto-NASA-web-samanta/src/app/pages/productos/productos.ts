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
      nombre: 'SLS',
      imagen: 'https://c.files.bbci.co.uk/156F2/production/_110449778_mediaitem110449777.jpg'
    },
    {
      id: 2,
      nombre: 'Artemis II',
      imagen: 'https://encolombia.com/wp-content/uploads/2022/12/Artemis-I-cohete-de-la-nasa.jpg'
    },
    {
      id: 3,
      nombre: 'Convair X-11',
      imagen: 'https://th.bing.com/th/id/R.a1027f625776b59562897213aa982bb2?rik=bGJUIfD1Km35sQ&pid=ImgRaw&r=0'
    },
    {
      id: 4,
      nombre: 'Thor-Able',
      imagen: 'https://th.bing.com/th/id/R.ff92bf15ce2eedd2218699872df0985d?rik=fXL2uvgJ0WyZlQ&riu=http%3a%2f%2fwww.ipmsstockholm.se%2fhome%2fwp-content%2fuploads%2f2012%2f02%2fthor_delta_02.jpg&ehk=8Y4ffKEtrVtZuDYCB%2bapF%2b9qYR4aF%2fmL6zJ3%2fmjPVto%3d&risl=&pid=ImgRaw&r=0'
    }
  ];

  tierra: Producto[] = [
    {
      id: 5,
      nombre: 'Sullivan’s Island',
      imagen: 'https://cdn.stacksplatform.com/3w3bmkiryxtqk/migration/public/2023_Sullivans_Island_1.jpg'
    },
    {
      id: 6,
      nombre: 'A Turquoise Tint',
      imagen: 'https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/iotd/2026/a-turquoise-tint-for-the-black-sea/blackseabloom_pace_20260622.jpg?w=900&h=667&fit=crop&crop=faces%2Cfocalpoint'
    },
    {
      id: 7,
      nombre: 'The Moon Game ',
      imagen: 'https://assets.science.nasa.gov/dynamicimage/assets/science/esd/eo/images/iotd/2026/playing-the-moon-game-/tenthousandsmokes_oli2_20250929.jpg?w=720&h=480&fit=crop&crop=faces%2Cfocalpoint'
    }
  ];

  
  universo: Producto[] = [
    {
      id: 8,
      nombre: 'Exoplanets',
      imagen: 'https://static01.nyt.com/images/2022/04/05/science/02sci-exoplanets7/02sci-exoplanets7-videoSixteenByNine3000.jpg'
    },
    {
      id: 9,
      nombre: 'Stars',
      imagen: 'https://static.vecteezy.com/system/resources/thumbnails/048/044/698/original/a-detailed-diagram-of-a-stars-life-cycle-with-visuals-of-each-stage-and-explanations-of-the-processes-involved-video.jpg'
    },
    {
      id: 10,
      nombre: 'Black Holes',
      imagen: 'https://d.newsweek.com/en/full/1781173/black-hole.jpg'
    },
    {
      id: 11,
      nombre: 'Galaxies',
      imagen: 'https://th.bing.com/th/id/R.307691e39e3c96a96cbae140b220addd?rik=CZv9rXLw8HEMRA&pid=ImgRaw&r=0'
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

  busqueda: string = '';

  get productosFiltrados(): Producto[] {
  return this.productos.filter(p =>
    p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
  );
}

get tierraFiltrada(): Producto[] {
  return this.tierra.filter(p =>
    p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
  );
}

get universoFiltrado(): Producto[] {
  return this.universo.filter(p =>
    p.nombre.toLowerCase().includes(this.busqueda.toLowerCase())
  );
}
}
