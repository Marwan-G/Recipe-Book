import {Component} from '@angular/core';
import {Recipe} from '../recipe.model';
@Component({
  selector: 'app-recipe-list',
  templateUrl:'./recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class AppRecipeList {
recipes:Recipe[]=[
  new Recipe("Pasta","italian dish ","https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715539_960_720.jpg"),
  new Recipe("Pasta","italian dish ","https://cdn.pixabay.com/photo/2015/04/10/00/41/food-715539_960_720.jpg")
];
}
