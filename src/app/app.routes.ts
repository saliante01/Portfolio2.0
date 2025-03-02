import { Routes } from '@angular/router';
import { NavbarComponent } from './navbar/navbar.component';
import { HomeComponent } from './home/home.component';
import { SkillsComponent } from './skills/skills.component';
import { ProjectsComponent } from './projects/projects.component';

export const routes: Routes = [

    { path: 'navbar',component:NavbarComponent},
    { path: 'skills',component:SkillsComponent},
    {path: 'projects',component:ProjectsComponent},
    { path: '', component:HomeComponent }

];
