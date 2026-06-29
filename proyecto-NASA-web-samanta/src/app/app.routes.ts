import { Routes } from '@angular/router';
import { Inicio } from './pages/inicio/inicio';
import { Nosotros } from './pages/nosotros/nosotros';
import { Contacto } from './pages/contacto/contacto';
import { Footer} from './components/footer/footer';
import { NotFound } from './pages/not-found/not-found';
import { Productos } from './pages/productos/productos';
import { Eventos } from './pages/eventos/eventos';
import { NasaTv } from './pages/nasa-tv/nasa-tv';


export const routes: Routes = [
  {
    path: '',
    component: Inicio
  },
  {
    path: 'nosotros',
    component: Nosotros
  },
  {
    path: 'contacto',
    component: Contacto
  },
  {
    path: 'footer',
    component: Footer
  },
  {
    path: 'producto',
    component: Productos
  },
  {
    path: 'eventos',
    component: Eventos
  },
  {
    path: 'nasa-tv',
    component: NasaTv
  },
  {
    path: '**',
    component: NotFound
  }
];
