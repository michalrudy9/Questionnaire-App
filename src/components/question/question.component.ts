import {
  Component,
  Input,
  OnInit,
  WritableSignal,
  inject,
  signal,
} from '@angular/core';
import { MatInputModule } from '@angular/material/input';
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
import { ScaleComponent } from '../scale/scale.component';

@Component({
  selector: 'app-question',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatInputModule,
    MatIconModule,
    MatMenuModule,
    MatRadioModule,
    MatCheckboxModule,
    OptionComponent,
    ScaleComponent,
  ],
  templateUrl: './question.component.html',
  styleUrl: './question.component.scss',
})
export class QuestionComponent implements OnInit {
  @Input() formArray!: FormArray;
  @Input() index!: number;
  private formBuilder = inject(FormBuilder);
  protected selectedInputType = signal('single_choice');
  protected selectedScaleFrom!: WritableSignal<number>;
  protected selectedScaleTo!: WritableSignal<number>;

  ngOnInit(): void {
    this.selectedScaleFrom = signal<number>(1);
    this.selectedScaleTo = signal<number>(5);

    this.group.addControl('options', this.formBuilder.array([]));
    this.group.addControl('scaleFrom', this.formBuilder.control(0));
    this.group.addControl('scaleTo', this.formBuilder.control(0));
    this.group.addControl('inputType', this.formBuilder.control('single_choice'))
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
        option: this.formBuilder.control(''),
      })
    );
  }

  selectInputType(type: string) {
    this.selectedInputType.set(type);
    this.group.addControl('shortAnswer', this.formBuilder.control(''));
    this.group.get('inputType')?.setValue(this.selectedInputType());
  }

  selectScaleFrom(scale: number) {
    this.selectedScaleFrom.set(scale);
    this.group.get('scaleFrom')?.setValue(this.selectedScaleFrom());
  }

  selectScaleTo(scale: number) {
    this.selectedScaleTo.set(scale);
    this.group.get('scaleTo')?.setValue(this.selectedScaleTo());
  }
}
