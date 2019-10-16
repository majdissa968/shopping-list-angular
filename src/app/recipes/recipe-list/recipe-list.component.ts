import { Subscription } from 'rxjs';
import { Recipe } from "./../recipe.model";
import { Component, OnInit, OnDestroy } from "@angular/core";
import { RecipeService } from '../recipe.service';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: "app-recipe-list",
  templateUrl: "./recipe-list.component.html",
  styleUrls: ["./recipe-list.component.css"]
  // providers: [RecipeService]
})


export class RecipeListComponent implements OnInit, OnDestroy {
  recipes: Recipe[];
  Subscription: Subscription
  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private recipeService: RecipeService) { }

  ngOnInit() {
    this.Subscription = this.recipeService.recipeChange.subscribe((recipes: Recipe[]) => {
      this.recipes = recipes
    })
    this.recipes = this.recipeService.getRecipes();
  }


  onNewRecipe() {
    this.router.navigate(['new'], { relativeTo: this.route })
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe()
  }

}
