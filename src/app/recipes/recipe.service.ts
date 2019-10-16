import { ShoppingListService } from "./../shopping-list/shopping-list.service";
import { Recipe } from "./recipe.model";
import { Output, EventEmitter, Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";

@Injectable()
export class RecipeService {
  @Output() recipeSelected = new EventEmitter<Recipe>();

  private recipes: Recipe[] = [
    new Recipe(
      "Tasty Schnitzel",
      "A super Tasty Schnitzel-just-awesome",
      "https://www.thespruceeats.com/thmb/cckc3_4QUQ79kSFhcLPM8xg9F3g=/3797x2848/smart/filters:no_upscale()/wiener-schnitzel-recipe-1447089-Hero-5b587d6c46e0fb0071b0059d.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    ),
    new Recipe(
      "Big Fat Burger",
      "Whar esle do you need to say",
      "https://www.thespruceeats.com/thmb/xZU__qGyThuUAq8mTosBd1cmLAs=/1333x1000/smart/filters:no_upscale()/juicy-baked-burgers-3052097-7-5b1054308e1b6e0036bc6cd1.jpg",
      [new Ingredient("Meat", 1), new Ingredient("French Fries", 20)]
    )
  ];

  constructor(private slService: ShoppingListService) { }

  getRecipes() {
    return this.recipes.slice();
  }

  getRecipe(index: number) {
    return this.recipes[index]
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.slService.addIngredients(ingredients);
  }
}
