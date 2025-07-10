import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ClocksService } from '../../services/clocks.service';
import { AppComponent } from '../../app.component';
import { Clock } from '../../interfaces/clock';





@Component({
  selector: 'app-settings',
  imports: [FormsModule, AppComponent],
  providers: [ClocksService,],
  templateUrl: './settings.component.html',
  styleUrl: './settings.component.css'
})
export class SettingsComponent {






}
