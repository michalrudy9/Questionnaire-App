import { Component, EventEmitter, Output } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-navigation-bar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule, MatButtonModule, RouterLink],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {
  @Output() toOnSubmitForm = new EventEmitter();

  toOnSubmit() {
    this.toOnSubmitForm.emit();
  }
}
