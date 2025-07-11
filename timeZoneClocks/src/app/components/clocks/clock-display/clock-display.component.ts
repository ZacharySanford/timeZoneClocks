import { Component, OnInit, OnDestroy } from '@angular/core';
import { Clock } from '../../../interfaces/clock';
import { ClocksService } from '../../../services/clocks.service';
import { CommonModule, DatePipe } from '@angular/common';


@Component({
  selector: 'app-clock-display',
  imports: [CommonModule],
  templateUrl: './clock-display.component.html',
  styleUrl: './clock-display.component.css'
})


export class ClockDisplayComponent implements OnInit, OnDestroy {

  time = new Date();
  intervalId: any;

  ngOnInit(): void {
    this.intervalId = setInterval(() => {
      this.time = new Date();
    }, 1000);
  }

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  get secondRotation(): string {
    return `rotate(${this.time.getSeconds() * 6}deg)`;
  }

  get minuteRotation(): string {
    return `rotate(${this.time.getMinutes() * 6 + this.time.getSeconds() * 0.1}deg)`;
  }

  get hourRotation(): string {
    return `rotate(${(this.time.getHours() % 12) * 30 + this.time.getMinutes() * 0.5}deg)`;
  }

   public clockList : Clock [] ;

  constructor(private clockService : ClocksService) {
    this.clockList = clockService.getClockInfo();
  }

    timezone = 'Coordinated Universal Time';

  index = 0;

  setTimezone(index: number){
    if(this.clockList[index].timeZone == 'Americas/Detroit'){

  }


}
}
