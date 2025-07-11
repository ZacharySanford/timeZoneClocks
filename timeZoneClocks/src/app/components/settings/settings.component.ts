import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { ClockFormComponent } from './clock-form/clock-form.component';





@Component({
  selector: 'app-settings',
  imports: [FormsModule,ClockFormComponent],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {






}
