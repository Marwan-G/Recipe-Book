import {Component, OnInit, ElementRef, ViewChild, EventEmitter, Output} from '@angular/core';
import {Ingredient} from '../../shared/ingredient.model'
@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {

  @ViewChild('nameInput') nameInputRef: ElementRef;
  @ViewChild('amountInput') amountInputRef: ElementRef;
  @Output() ingredientAdded = new EventEmitter<Ingredient>();

  ngOnInit() {
  }


  onAddItem() {

    const nameIng = this.nameInputRef.nativeElement.value;
    const amountIng = this.amountInputRef.nativeElement.value;
    const newIngredient = new Ingredient(nameIng, amountIng);
    this.ingredientAdded.emit(newIngredient);
   }

}































//@ViewChild('nameInput')  nameInputRef: ElementRef;
// @ViewChild( 'amountInput') amountInputRef: ElementRef;
// @Output() ingredientAdded = new EventEmitter<Ingredient>();
//
// onAddItem(){
//    const nameIng = this.nameInputRef.nativeElement.value;
//    const amountIng = this.amountInputRef.nativeElement.value;
//    const newIngrediente = new Ingredient(nameIng , amountIng)
//    this.ingredientAdded.emit(newIngrediente);
