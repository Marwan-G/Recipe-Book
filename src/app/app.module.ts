import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import {AppRecipes}from '../app/recipes/recipes.component';
import {AppHeader} from '../app/header/header.component';
import {AppRecipeDetail} from '../app/recipes/recipe-detail/recipe-detail.component';
import {AppRecipeItem} from '../app/recipes/recipe-list/recipe-item/recipe-item.component';
import {AppRecipeList} from '../app/recipes/recipe-list/recipe-list.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { ShoppingEditComponent } from './shopping-list/shopping-edit/shopping-edit.component';
@NgModule({
  declarations: [
    AppComponent,
    AppHeader,
    AppRecipeDetail,
    AppRecipeItem,
    AppRecipeList,
    ShoppingListComponent,
    ShoppingEditComponent,
    AppRecipes

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
