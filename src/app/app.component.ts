import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { NavigationBarComponent } from '../components/navigation-bar/navigation-bar.component';
import { QuestionnaireListComponent } from '../components/questionnaire-list/questionnaire-list.component';
import { QuestionnaireItemComponent } from '../components/questionnaire-item/questionnaire-item.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    CommonModule,
    RouterOutlet,
    NavigationBarComponent,
    QuestionnaireListComponent,
    QuestionnaireItemComponent
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {}
