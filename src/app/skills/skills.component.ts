import { Component } from '@angular/core';
import { NavbarComponent } from '../navbar/navbar.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-skills',
  imports: [NavbarComponent,CommonModule],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  images = ['java3.png.webp','SpringLogo.png', 'klipartz.com-2.png', 'workbench1.png','UnityLogo.png','Csharp_Logo.png','gitlabLogo.png','github.png'];

}
