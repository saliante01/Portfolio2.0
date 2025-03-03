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
      description: 'Sitio web desarrollado en Angular y Spring para gestion empresarial',
      context: 'Proyecto para empresa',
      website: 'https://www.extremeadventureacademy.com/',
    },
    {
      title: 'Aerologic',
      image: 'assets/aerologicImg.png',
      softwareType: 'Educational Software',
      duration: '2 Months',
      description: 'Software enfocado en la enseñanza de la energía eolica',
      context: 'Practica Profesional 1',
      website: 'https://ffstudios.cl',
    },
    {
      title: 'MiniJuegos',
      image: 'assets/whatamole.png',
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
      image: 'assets/project78.png',
      softwareType: 'Sitio Web',
      duration: '6 meses',
      description: 'Desarrollo de un juego con tematica de misterio 3D',
      context: 'Proyecto semestral - Universidad',
    },
    {
      title: 'Unearth The Unknown',
      image: 'assets/Unearth.png',
      softwareType: 'Aplicación Móvil',
      duration: '1 mes',
      description: 'Desarrollo de un juego 3D, para una GameJam',
      context: 'Proyecto personal',
      github: 'https://github.com/usuario/proyecto4',
      website: 'https://finanzasapp.com',
      gitlab: 'https://gitlab.com/usuario/proyecto6',
    },
  ];
}
