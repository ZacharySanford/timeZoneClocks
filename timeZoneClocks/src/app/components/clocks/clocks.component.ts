import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-clocks',
  standalone: true,
  imports: [CommonModule], 
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent implements OnInit, OnDestroy {
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
}

