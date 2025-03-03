import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-education',
  imports: [NavbarComponent, CommonModule],
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent {
  milestones = [
    { title: 'Ingeniería Civil Informática',university:'Universidad de la Frontera, Temuco', date: '2019 - Actual' },
    { title: 'Enseñanza Media', university: 'Liceo Camilo Henriquez, Temuco', date: '2013 - 2018' },
  ];
}