import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClocksComponent } from './components/clocks/clocks.component';
import { ClocksService } from './services/clocks.service';
import { Clock } from './interfaces/clock';


@Component({
  selector: 'app-root',
  imports: [RouterOutlet],
  providers: [ClocksService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timeZoneClocks';


}
