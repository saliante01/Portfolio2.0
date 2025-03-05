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
      softwareType: 'Web Software',
      duration: '1 Month',
      description: 'Website developed in Angular and Spring for business management',
      context: 'Project for a company',
      website: 'https://www.extremeadventureacademy.com/',
    },
    {
      title: 'Aerologic',
      image: 'assets/aerologicImg.png',
      softwareType: 'Educational Software',
      duration: '2 Months',
      description: 'Software focused on teaching wind energy',
      context: 'Professional Practice 1',
      website: 'https://ffstudios.cl',
    },
    {
      title: 'MiniGames',
      image: 'assets/whatamole.png',
      softwareType: 'Game Development',
      duration: '1 Month',
      description: 'Development of 6 mini-games for the company "Abstract Digital"',
      context: 'Professional Practice 2',
      website: 'https://www.abstractdw.com',
    },
    {
      title: 'HackMaster',
      image: 'assets/hackatonImg.png',
      softwareType: 'Hackathon Software',
      duration: '4 Months',
      description: 'Development of a website for hackathon management',
      context: 'Semester Project - University',
    },
    {
      title: 'Project 78',
      image: 'assets/project78.png',
      softwareType: 'Website',
      duration: '6 Months',
      description: 'Development of a 3D mystery-themed game',
      context: 'Semester Project - University',
    },
    {
      title: 'Unearth The Unknown',
      image: 'assets/Unearth.png',
      softwareType: 'Mobile Application',
      duration: '1 Month',
      description: 'Development of a 3D game for a GameJam',
      context: 'Personal Project',
      github: 'https://github.com/usuario/proyecto4',
      website: 'https://finanzasapp.com',
      gitlab: 'https://gitlab.com/usuario/proyecto6',
    },
  ];
}
