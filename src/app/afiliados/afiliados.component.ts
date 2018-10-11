import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Recipe } from '../recipes/recipes.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-afiliados',
  templateUrl: './afiliados.component.html',
  styleUrls: ['./afiliados.component.css']
})
export class AfiliadosComponent implements OnInit {

  @Output() recipeWasSelected = new EventEmitter<Recipe>();
  @Output() featureSelected = new EventEmitter<string>();
  recipes : Recipe[];
  
  constructor(private recipeService: RecipeService ) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
  }
  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe);  

  }
  onSelect(feature: string){
    this.featureSelected.emit(feature);
  }
}
