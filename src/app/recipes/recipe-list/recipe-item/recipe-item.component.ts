import {Component, Input,Output, EventEmitter } from '@angular/core';
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class AppRecipeItem{
  @Input() recipe: {Recipe}

  @Output() recipeSelected= new EventEmitter<void>();
  OnSelectedRecipe(){
   this.recipeSelected.emit()
     }
   }
