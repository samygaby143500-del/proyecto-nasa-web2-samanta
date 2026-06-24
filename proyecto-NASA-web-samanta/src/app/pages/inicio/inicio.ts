import { Component } from '@angular/core';
import { ProyectoCard } from '../../components/proyecto-card/proyecto-card';
import { CommonModule } from '@angular/common'
import { Mision } from '../../models/proyecto-card/proyecto-card';
import { RouterLink } from '@angular/router'

@Component({
  selector: 'app-inicio',
  standalone: true,
  imports: [CommonModule, ProyectoCard, RouterLink],
  templateUrl: './inicio.html',
  styleUrl: './inicio.css',
})
export class Inicio {

     misiones: Mision[] = [
  {
    nombre: 'Marte',
    descripcion: 'Exploración del planeta rojo',
    imagen: 'https://www.cfin.com.ar/wp-content/uploads/2024/02/marte.jpg'
  },
  {
    nombre: 'James Webb',
    descripcion: 'Telescopio espacial',
    imagen: 'https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23118277/51412207042_d9b9722df0_6k.jpg?quality=90&strip=all&crop=11.1083984375%2C0%2C77.783203125%2C100&w=2400'
  },
  {
    nombre: 'Artemis',
    descripcion: 'Regreso a la Luna',
    imagen: 'https://images.chicmagazine.com.mx/ObMa8dkTYDLvJ_jGBnbnGosoavg=/512x319/uploads/media/2026/03/31/descubre-regresa-artemis-dura-mision.jpg'
  },
  { nombre:'Voyager', 
    descripcion:'Espacio profundo', 
    imagen:'https://media.es.wired.com/photos/67461ef2a097c24e524573aa/1:1/w_742,h_742,c_limit/1-Voyager_2-copy.width-1320.jpg' 
  }
];

}
