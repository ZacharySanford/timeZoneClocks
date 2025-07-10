import { Component } from '@angular/core';
import { SettingsComponent } from '../settings.component';
import { Clock } from '../../../interfaces/clock';
import { ClocksService } from '../../../services/clocks.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-clock-form',
  standalone: true,
  imports: [SettingsComponent,FormsModule],
  templateUrl: './clock-form.component.html',
  styleUrl: './clock-form.component.css'
})
export class ClockFormComponent {

    public clockList : Clock [] ;

constructor(private clockService : ClocksService) {
  this.clockList = clockService.getClockInfo();
}

timezone: any;
  setTimezone(){
    this.clockList[0].timeZone = this.timezone;
  }

}
