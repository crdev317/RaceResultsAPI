import { Component } from '@angular/core';
import { RaceDetailsComponent } from './race-details/race-details.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  imports: [RaceDetailsComponent], 
  styles: [],
})
export class AppComponent {
  title = 'raceInsightsApp';
}
