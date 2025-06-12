import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { DemoAppComponent } from './demo-app/demo-app.component';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, DemoAppComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'Blog-Frontend-Meron-Tesfai';
}
