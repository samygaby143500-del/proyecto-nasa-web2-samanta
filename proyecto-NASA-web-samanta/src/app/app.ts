import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from './components/navbar/navbar';
import { Footer } from './components/footer/footer';
/*import { RouterLink } from '@angular/router';*/
import { HostListener } from '@angular/core';



@HostListener('window:scroll', [])


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, Navbar, Footer],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  isScrolled = false;
  onScroll() {
  this.isScrolled = window.scrollY > 50;
}
}
