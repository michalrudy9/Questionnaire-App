import { Component, Input, OnInit } from '@angular/core';
import { FormArray, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-option',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    ReactiveFormsModule,
  ],
  templateUrl: './option.component.html',
  styleUrl: './option.component.scss',
})
export class OptionComponent {
  @Input() index!: number;
  @Input() options!: FormArray;

  get group(): FormGroup {
    return this.options.controls[this.index] as FormGroup;
  }

  removeAnswer(index: number) {
    this.options.removeAt(index);
  }
}
