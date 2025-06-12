import { Component } from '@angular/core';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { NgClass, NgStyle } from '@angular/common';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';

@Component({
  selector: 'app-demo-app',
  imports: [
    MatListModule,
    MatButtonModule,
    NgClass,
    NgStyle,
    MatFormFieldModule,
    MatInputModule,
    FormsModule,
    MatSelectModule,
  ],
  templateUrl: './demo-app.component.html',
  styleUrl: './demo-app.component.scss',
})
export class DemoAppComponent {
  showList = false;
  username = '';
  cars: string[] = ['Mercedes', 'BMW', 'VW', 'Audi'];
  selectedCar = 'Mercedes';

  show() {
    this.showList = !this.showList;
  }
}
