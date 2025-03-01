import { Component, HostListener } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  isScrolled = false;  // Variable para el estado del scroll

  constructor(private router: Router) {}

  // Método para redirigir a las rutas
  goTo(path: string) {
    this.router.navigate([path]);
  }

  // Detecta el evento de scroll y cambia el estado de isScrolled
  @HostListener('window:scroll', ['$event'])
  onWindowScroll(event: Event) {
    this.isScrolled = window.scrollY > 50;  // Cambiar el valor de scroll según la distancia
  }
}