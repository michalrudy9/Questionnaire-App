import { Component, OnInit, Signal, inject, signal } from '@angular/core';
import { NavigationBarComponent } from '../navigation-bar/navigation-bar.component';
import { MatButtonModule } from '@angular/material/button';
import {
  FormBuilder,
  FormGroup,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';
import { ErrorMessage } from '../../models/error-message.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [NavigationBarComponent, MatButtonModule, ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent implements OnInit {
  private formBuilder = inject(FormBuilder);
  protected form!: FormGroup;
  protected errorMessage!: Signal<ErrorMessage>;

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: this.formBuilder.control(null, Validators.email),
      password: this.formBuilder.control(null, Validators.required),
    });

    this.errorMessage = signal<ErrorMessage>({ message: '' });
  }

  protected onSubmit() {
    const formData = this.form.value;
    if (!formData['email'] || !formData['password']) {
      this.errorMessage = signal<ErrorMessage>({
        message: 'Please enter e-mail and password!',
      });
    } else {
      //...
    }
    this.form.reset();
  }
}
