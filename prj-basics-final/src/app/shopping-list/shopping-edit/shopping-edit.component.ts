import { Component, OnInit, ViewChild, ElementRef, EventEmitter, Output } from '@angular/core';

import { Ingredient } from '../../shared/ingredient.model';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('amountInput') amountInput: ElementRef;
  @ViewChild('nameInput') nameInput: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();
  @Output() ingredientsCleared = new EventEmitter<void>();
  @Output() ingredientDeleted = new EventEmitter<void>();
 
  constructor() { }

  ngOnInit() {
  }

  addIngredient(){
    const name = this.nameInput.nativeElement.value;
    const amount = this.amountInput.nativeElement.value;

    this.ingredientAdded.emit(new Ingredient(name, amount));
  }

  clearIngredients(){
    this.ingredientsCleared.emit(); 
  }
}
