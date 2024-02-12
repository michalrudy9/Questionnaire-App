import { Component, Input, OnInit, inject, signal } from '@angular/core';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatRadioModule } from '@angular/material/radio';
import { MatCheckboxModule } from '@angular/material/checkbox';
import {
  FormArray,
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
} from '@angular/forms';
import { OptionComponent } from '../option/option.component';

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
    OptionComponent,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input() formArray!: FormArray;
  @Input() index!: number;
  private formBuilder = inject(FormBuilder);
  protected selectedInputType = signal('single_choice');
  protected selectedScaleFrom = signal(1);
  protected selectedScaleTo = signal(5);

  ngOnInit(): void {
    this.group.addControl('options', this.formBuilder.array([]));
  }

  get group(): FormGroup {
    return this.formArray.controls[this.index] as FormGroup;
  }

  get options(): FormArray {
    return this.formArray.controls[this.index].get('options') as FormArray;
  }

  addAnswer() {
    this.options.push(
      this.formBuilder.group({
        option: this.formBuilder.control('')
      })
    );
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
