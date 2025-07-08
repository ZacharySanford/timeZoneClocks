import { DatePipe } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-clocks',
  imports: [DatePipe],
  templateUrl: './clocks.component.html',
  styleUrl: './clocks.component.css'
})
export class ClocksComponent implements OnInit, OnDestroy {
    time = new Date();
    intervalId: any;
    subscription: Subscription = new Subscription;
    ngOnInit(): void{
        this.intervalId = setInterval(() => {
          this.time = new Date();
        }, 1000);
    }
    ngOnDestroy(): void {
        clearInterval(this.intervalId);
        if(this.subscription) {
          this.subscription.unsubscribe;
        }
    }
}
