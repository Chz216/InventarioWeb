import { Component, OnInit, Output } from '@angular/core';
import { Recipe } from './Recipes.model';
import { RecipeService} from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
recipeSelected: Recipe;
  constructor(private recipeService: RecipeService) { }

  ngOnInit() {
  }

}
