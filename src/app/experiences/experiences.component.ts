import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-experiences',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './experiences.component.html',
  styleUrls: ['./experiences.component.css']
})
export class ExperiencesComponent {
  experiences = [

    {
      title: 'Game Developer',
      date: 'Junio - 2025',
      place: 'Abstract Digital',
      description: 'Programar videojuegos para clientes'
    },
    {
      title: 'Desarrollador web',
      date: 'Diciembre - 2024',
      place: 'Extreme Adventure Academy',
      description: 'Programación de pagina web para la gestión y promoción empresarial, uso de JWT, Tokens'
    },

    {
      title: 'Game Developer',
      date: 'Octubre - 2024',
      place: 'Gamejam',
      description: 'Programar fpisicas de movimiento y control de personaje, desarrollar interacciones con objetos y personajes para una experiencia inmersiva, crear puzzle numerico interactivo',
    },
    {
      title: 'Game Developer',
      date: 'Junio - 2023',
      place: 'Universidad de la Frontera',
      description: 'Programar mecánicas del juego, desarrollo de interacciones del personaje principal con puzzles'
    },
    {
      title: 'Practicante de Desarrollo de software',
      date: 'Enero 2023',
      place: 'Ff Studios',
      description: 'Desarrollo de herramienta interactiva para aprendizaje sobre el funcionamiento de un Parque Eolico , considerando parametros comunes de operación, ocasiones de falla y conceptos relevantes'
    },
    // Agrega más experiencias si es necesario
  ];
}