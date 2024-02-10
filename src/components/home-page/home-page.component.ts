import { Component } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { QuestionnaireListComponent } from '../questionnaire-list/questionnaire-list.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [NavigationBarComponent, QuestionnaireListComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.scss',
})
export class HomePageComponent {}
