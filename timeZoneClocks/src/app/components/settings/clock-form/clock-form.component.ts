import { Component } from '@angular/core';

import { Clock } from '../../../interfaces/clock';
import { ClocksService } from '../../../services/clocks.service';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-clock-form',
  standalone: true,
  imports: [FormsModule,CommonModule],
  templateUrl: './clock-form.component.html',
  styleUrl: './clock-form.component.css'
})
export class ClockFormComponent {

    public clockList : Clock [] ;

constructor(private clockService : ClocksService) {
  this.clockList = clockService.getClockInfo();
}

timezone = 'Coordinated Universal Time';

index = 0;
onClick(index : number){
 console.log(`Clicked item at index ${index}`)
}

onSelect(event: Event){
  this.timezone = (event.target as HTMLSelectElement).value;
}

setTimezone(index:number){
   this.clockList[index].timeZone = this.timezone;
   console.log(this.clockList[index].timeZone)
  }

}
