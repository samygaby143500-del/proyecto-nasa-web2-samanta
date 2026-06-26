import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
 import { Router } from '@angular/router';
 import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink, FormsModule],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css',
})
export class Navbar {
  imagenLogo = "assets/img/logo-nasa.png";
busqueda: string = '';


}
