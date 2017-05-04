import { Component } from '@angular/core';
//import { OddComponent } from './odd/odd.component';
import { EvenComponent } from './even/even.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  numbers = []; 
  onCounterUpdated(counter) {
    this.numbers.push(counter); 
  }
}
