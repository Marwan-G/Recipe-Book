import {Component,Output, EventEmitter} from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl:'./recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class AppRecipeList {
  recipes: Recipe[] = [
    new Recipe("Pasta", "italian dish ", "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715539_960_720.jpg"),
    new Recipe("Spagetti", "libyan dish ", "https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715539_960_720.jpg")
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>()
  selectedRecipe(recipe:Recipe){
    this.recipeWasSelected.emit(recipe)
  }
}

