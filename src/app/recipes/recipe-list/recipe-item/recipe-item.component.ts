import {Component, Input,Output, EventEmitter } from '@angular/core';
import { Recipe } from '../../recipe.model'
@Component({
  selector: 'app-recipe-item',
  templateUrl: './recipe-item.component.html',
  styleUrls: ['./recipe-item.component.css']
})
export class AppRecipeItem{
  @Input() recipe:  Recipe

  @Output() onSelected= new EventEmitter<void>();
  OnSelectedRecipe(){
   this.onSelected.emit()
     }
   }
