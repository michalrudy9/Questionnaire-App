import { Component, inject } from '@angular/core';
import { FormArray, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { QuestionComponent } from '../question/question.component';


@Component({
  selector: 'app-admin-panel',
  standalone: true,
  imports: [
    NavigationBarComponent,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    QuestionComponent
  ],
  templateUrl: './admin-panel.component.html',
  styleUrl: './admin-panel.component.scss',
})
export class AdminPanelComponent {
  private formBuilder = inject(FormBuilder);
  protected questionnaireForm!: FormGroup;
  
  ngOnInit(): void {
    this.questionnaireForm = this.formBuilder.group({
      title: this.formBuilder.control('Form without name'),
      description: this.formBuilder.control('Form description'),
      questions: this.formBuilder.array([]),
    });
  }

  get questions(): FormArray {
    return this.questionnaireForm.get('questions') as FormArray;
  }

  addQuestion() {
    this.questions.push(
      this.formBuilder.group({
        question: this.formBuilder.control('Question'),
      })
    );
  }
}
