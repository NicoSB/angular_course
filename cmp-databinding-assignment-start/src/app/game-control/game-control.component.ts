import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent implements OnInit {
  @Output() counterUpdated = new EventEmitter(); 
  counter: number = 0;
  ref;

  constructor() { }

  ngOnInit() {
  }
  
  startGame() {
    console.log("game started");
    this.ref = setInterval(function() {this.increaseCounter()}.bind(this), 1000);
  }

  stopGame() {
    console.log("game stopped");
    clearInterval(this.ref); 
  }

  increaseCounter(r) {
    console.log(++(this.counter));
    this.counterUpdated.emit(this.counter); 
  }
} 
