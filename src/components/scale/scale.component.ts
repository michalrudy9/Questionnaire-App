import {
  Component,
  EventEmitter,
  Input,
  Output,
  WritableSignal,
} from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';

@Component({
  selector: 'app-scale',
  standalone: true,
  imports: [MatFormFieldModule, MatIconModule, MatMenuModule],
  templateUrl: './scale.component.html',
  styleUrl: './scale.component.scss',
})
export class ScaleComponent {
  @Input() selectedScaleFrom!: WritableSignal<number>;
  @Input() selectedScaleTo!: WritableSignal<number>;
  @Output() toOnselectScaleFrom = new EventEmitter();
  @Output() toOnselectScaleTo = new EventEmitter();
  protected itemAmount: Number[] = Array(11);

  toOnScaleFrom(amount: number) {
    this.toOnselectScaleFrom.emit(amount);
  }

  toOnScaleTo(amount: number) {
    this.toOnselectScaleTo.emit(amount);
  }
}
