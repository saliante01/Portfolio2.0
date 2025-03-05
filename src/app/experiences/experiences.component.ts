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
      title: 'Software Development Intern',
      date: 'June - 2025',
      place: 'Abstract Digital',
      description: 'Programming video games for clients'
    },
    {
      title: 'Web Developer',
      date: 'December - 2024',
      place: 'Extreme Adventure Academy',
      description: 'Website programming for business management and promotion, using JWT and Tokens'
    },
    {
      title: 'Game Developer',
      date: 'October - 2024',
      place: 'Gamejam - Personal Project',
      description: 'Programming movement physics and character control, developing interactions with objects and characters for an immersive experience, creating an interactive numerical puzzle'
    },
    {
      title: 'Game Developer',
      date: 'June - 2023',
      place: 'Universidad de la Frontera',
      description: 'Programming game mechanics, developing interactions between the main character and puzzles'
    },
    {
      title: 'Software Development Intern',
      date: 'January 2023',
      place: 'Ff Studios',
      description: 'Development of an interactive tool for learning about the operation of a Wind Farm, considering common operational parameters, failure scenarios, and relevant concepts'
    },
    // Add more experiences if needed
  ];
}
