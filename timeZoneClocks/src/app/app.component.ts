import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ClocksComponent } from './components/clocks/clocks.component';



@Component({
  selector: 'app-root',
  imports: [RouterOutlet, ClocksComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'timeZoneClocks';
}
