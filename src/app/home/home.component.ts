import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-home',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  // Lista de imágenes que se van a mostrar
  images: string[] = [
    'assets/UnityLogo.png', // Cambia con tus propias imágenes
    'assets/java3.png.webp',
    'assets/SpringLogo.png',
    'assets/klipartz.com-2.png'
  ];

  // Índice de la imagen actual que se muestra
  currentIndex = 0;

  // Cambia a la imagen siguiente
  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
  }

  // Cambia a la imagen anterior
  prevImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
  }

  // Cambiar automáticamente cada 5 segundos
  ngOnInit() {
    setInterval(() => {
      this.nextImage();
    }, 5000); // Cambia de imagen cada 5 segundos
  }
}