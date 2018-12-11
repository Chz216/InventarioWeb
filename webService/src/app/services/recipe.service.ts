import { Recipes } from "../recipes/recipes.model";
import { EventEmitter, Injectable } from "../../../node_modules/@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { IngredientsService } from "./ingredients.service";
import { Subject } from 'rxjs';

@Injectable()
export class RecipeService {

  recipesChanged = new Subject<Recipes[]>();

  //recipeSelected = new EventEmitter<Recipes>();

  private recipe: Recipes[] = [
    new Recipes('Recipe a of pizza', 'This is a simply test', 'https://d25rq8gxcq0p71.cloudfront.net/language-guide/758/pepperoni%20pizza.jpg', [
      new Ingredient('Bread', 2),
      new Ingredient('cheese', 4)
    ]),
    new Recipes('A test recipes', 'This is a simply test', 'https://www.animalgourmet.com/wp-content/uploads/2017/09/cel-lisboa-60315-e1504660981599.jpg', [
      new Ingredient('Apple', 2),
      new Ingredient('cheese', 4)
    ]),
    new Recipes('Recipe meat grilled', 'This is a simply test', 'https://www.nutridieta.com/wp-content/uploads/2015/02/Comida.jpg', [
      new Ingredient('meat', 2),
      new Ingredient('cheese', 4)
    ]),
  ]

  constructor(private ingredientsService: IngredientsService){}

  getRecipes(){
    return this.recipe.slice();
  }

  getRecipe(index: number){
      return this.recipe[index];
  }

  addRecipe(recipe: Recipes) {
        this.recipe.push(recipe);
        this.recipesChanged.next(this.recipe.slice());
    }

  updateRecipe(index: number, recipe: Recipes) {
        this.recipe[index] = recipe;
        this.recipesChanged.next(this.recipe.slice());
    }

  addIngredientsToShoppingList(ingredients: Ingredient[]){
    this.ingredientsService.addIngredients(ingredients);
  }

  onDelateRecipe(index: number) {
      this.recipe.splice(index, 1);
      this.recipesChanged.next(this.recipe.slice());
    }

}
