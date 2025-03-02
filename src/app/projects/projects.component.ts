import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-projects',
  standalone: true,
  imports: [NavbarComponent, CommonModule],
  templateUrl: './projects.component.html',
  styleUrl: './projects.component.css',
})
export class ProjectsComponent {
  projects = [
    {
      title: 'Extreme Adventure Academy',
      image: 'assets/extremeAdventureIMG.png',
      softwareType: 'Software web ',
      duration: '1 Month',
      description: 'Pagina web para Extreme Adventure Academy, sitio web cuenta con: portal de usuario, portal de administrador, gestion de reservas. Desarrollado con Spring y Angular',
      context: 'Proyecto para empresa',
      website: 'https://www.extremeadventureacademy.com/',
    },
    {
      title: 'Aerologic',
      image: 'assets/aerologicImg.png',
      softwareType: 'Educational Software',
      duration: '2 Months',
      description: 'Aerologic is an educational software developed in Unity and C# by FF Studios during my Professional Practice I, focusing on wind energy education through interactive turbine simulations.',
      context: 'Practica Profesional 1',
      website: 'https://ffstudios.cl',
    },
    {
      title: 'MiniJuegos',
      image: 'assets/project5.jpg',
      softwareType: 'Game development',
      duration: '1 Month',
      description: 'Desarrollo de 6 minijuegos para la empresa "Abstract Digital" ',
      context: 'Practica Profesional 2',
      website: 'https://www.abstractdw.com',
    },
    {
      title: 'HackMaster',
      image: 'assets/hackatonImg.png',
      softwareType: 'Hackaton Software',
      duration: '4 meses',
      description: 'Desarrollo de sitio web para la gestion de hackatones',
      context: 'Proyecto semestral - Universidad',
    },
    {
      title: 'Project 78',
      image: 'assets/project5.jpg',
      softwareType: 'Sitio Web',
      duration: '6 meses',
      description: 'Desarrollo de un blog con artículos y suscripciones.',
      context: 'Proyecto semestral - Universidad',
    },
    {
      title: 'Unearth The Unknown',
      image: 'assets/Unearth.png',
      softwareType: 'Aplicación Móvil',
      duration: '1 mes',
      description: 'Aplicación para el control de ingresos y gastos.',
      context: 'Proyecto personal',
      github: 'https://github.com/usuario/proyecto4',
      website: 'https://finanzasapp.com',
    },
   
    {
      title: 'Sistema de Inventario',
      image: 'assets/project6.jpg',
      softwareType: 'Software Empresarial',
      duration: '5 meses',
      description: 'Sistema para gestionar inventarios y reportes de ventas.',
      context: 'Práctica profesional',
      gitlab: 'https://gitlab.com/usuario/proyecto6',
    },
  ];
}
