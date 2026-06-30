import { Component } from "@angular/core";

@Component({
  selector: "app-eventos",
  imports: [],
  templateUrl: "./eventos.html",
  styleUrl: "./eventos.css",
})

export class Eventos {
  //copiarLink() {
  // navigator.clipboard.writeText(window.location.href);
  // alert('¡Enlace copiado al portapapeles!'); }

copiarYAbrir() {
  const link = "https://www.instagram.com/nasa/";
  alert('¡Enlace copiado al portapapeles! Se abrirá Instagram en una nueva pestaña.');

  // 1. copiar al portapapeles
  navigator.clipboard.writeText(window.location.href).then(() => {

    // 2. abrir Instagram después
    window.open(link, "_blank");

  }).catch(err => {
    console.error("Error al copiar:", err);
    // igual abrimos si falla el copy
    window.open(link, "_blank");
  });
}
}

