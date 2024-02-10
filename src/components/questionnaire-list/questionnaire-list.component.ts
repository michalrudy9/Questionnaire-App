import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-questionnaire-list',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './questionnaire-list.component.html',
  styleUrl: './questionnaire-list.component.scss',
})
export class QuestionnaireListComponent {}
