import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'navigation-bar',
  standalone: true,
  imports: [MatIconModule, MatToolbarModule],
  templateUrl: './navigation-bar.component.html',
  styleUrl: './navigation-bar.component.scss',
})
export class NavigationBarComponent {}
