import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styles: [` .fiveOrMore { 
		color: white
	}`]
})
export class AppComponent {
	showSecret = false;
	logArray = [];
	
	displayDetails() {
		this.showSecret = !this.showSecret;
		if (this.logArray.length == 0) {
			this.logArray.push(1);
		} else {
			var lastElement = this.logArray.pop();
			this.logArray.push(lastElement);
			this.logArray.push(lastElement + 1);
		}
	}
}
