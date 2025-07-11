import { CommonModule } from '@angular/common';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ClockDisplayComponent } from './clock-display/clock-display.component';
import { ClocksService } from '../../services/clocks.service';
import { Clock } from '../../interfaces/clock';

@Component({
  selector: 'app-clocks',
  standalone: true,
  imports: [CommonModule,ClockDisplayComponent],
  templateUrl: './clocks.component.html',
  styleUrls: ['./clocks.component.css']
})
export class ClocksComponent  {


}
