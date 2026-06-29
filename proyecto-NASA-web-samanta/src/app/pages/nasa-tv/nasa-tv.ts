import { Component } from "@angular/core";

@Component({
  selector: "app-nasa-tv",
  imports: [],
  templateUrl: "./nasa-tv.html",
  styleUrl: "./nasa-tv.css",
})
export class NasaTv {
     programas = [

    {
      titulo: 'Lanzamientos',
      descripcion: 'Cobertura de todos los lanzamientos.',
      imagen: 'https://images-assets.nasa.gov/image/KSC-20250410-PH-KLS01_0008/KSC-20250410-PH-KLS01_0008~large.jpg'
    },

    {
      titulo: 'ISS en Vivo',
      descripcion: 'Vista en directo desde la Estación Espacial.',
      imagen: 'https://images-assets.nasa.gov/image/iss072e320320/iss072e320320~large.jpg'
    },

    {
      titulo: 'Exploración',
      descripcion: 'Misiones y descubrimientos.',
      imagen: 'https://images-assets.nasa.gov/image/PIA23764/PIA23764~large.jpg'
    },

    {
      titulo: 'Universo',
      descripcion: 'Galaxias y nebulosas.',
      imagen: 'https://images-assets.nasa.gov/image/GSFC_20171208_Archive_e001861/GSFC_20171208_Archive_e001861~large.jpg'
    }

  ];
}

