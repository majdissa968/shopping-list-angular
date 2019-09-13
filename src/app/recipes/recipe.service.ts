import { Recipe } from "./recipe.model";
import { Output, EventEmitter } from "@angular/core";
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4I1N6QSJ9b8phSiIpc9XYYs44wPGl82I7dXS8NqzjmUFxCGj",
      [
          new Ingredient('Meat', 1),
          new Ingredient('French Fries', 20)
      ]
      ),
    new Recipe(
      "A Test Recipe",
      "This is simply a test",
      "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTU4I1N6QSJ9b8phSiIpc9XYYs44wPGl82I7dXS8NqzjmUFxCGj",
    [
      new Ingredient('Meat', 1),
      new Ingredient('French Fries', 20)
    ]
    )



  ];

  getRecipes() {
    return this.recipes.slice();
  }
}
