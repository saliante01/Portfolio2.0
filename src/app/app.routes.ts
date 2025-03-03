import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';
import { EducationComponent } from './education/education.component';
import { ExperiencesComponent } from './experiences/experiences.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [

    { path: 'navbar',component:NavbarComponent},
    { path: 'skills',component:SkillsComponent},
    { path: 'projects',component:ProjectsComponent},
    { path: 'education',component:EducationComponent },
    { path: 'experiences',component:ExperiencesComponent },
    { path: 'contact',component:ContactComponent},
    { path: '', component:HomeComponent }

];
