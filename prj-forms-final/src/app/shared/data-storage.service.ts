import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

import { RecipeService } from '../recipes/recipe.service';
import { Recipe } from '../recipes/recipe.model';

import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {}

  storeRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put('https://angular-recipe-book.firebaseio.com/recipes.json', recipes);
  }

  fetchRecipes() {
    this.http.get('https://angular-recipe-book.firebaseio.com/recipes.json')
    .map(
      (response: Response) => {
        const recipes = response.json();
        for(let recipe of recipes) {
          if (!recipe['ingredients']) {
            console.log("no ingredients");
            recipe['ingredients'] = [];
          }
        }

        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeService.setRecipes(recipes);
      }
    );
  }
}
