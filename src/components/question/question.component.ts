import { Component, Input, OnInit, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatFormFieldModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input() formArray!: FormArray;
  @Input() index!: number;
  protected selectedInputType = signal('single_choice');
  protected selectedScaleFrom = signal(1);
  protected selectedScaleTo = signal(5);

  ngOnInit(): void {}

  get group(): FormGroup {
    return this.formArray.controls[this.index] as FormGroup;
  }

  selectInputType(type: string) {
    this.selectedInputType.set(type);
  }

  selectScaleFrom(scale: number) {
    this.selectedScaleFrom.set(scale);
  }

  selectScaleTo(scale: number) {
    this.selectedScaleTo.set(scale);
  }
}
