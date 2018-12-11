import { Component, OnInit, Output, EventEmitter} from '@angular/core';
import { Recipes } from '../recipes.model';
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '../../../../node_modules/@angular/router';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  @Output() recipesWasSelected = new EventEmitter<Recipes>();
  recipes : Recipes[];

  private subscirbe: Subscription;

  constructor(private recipeService : RecipeService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit() {
    this.recipes = this.recipeService.getRecipes();
    this.subscirbe= this.recipeService.recipesChanged.subscribe((recipes:Recipes[])=>{
    this.recipes=recipes;
    });
  }

  onNewRecipe(){
    this.router.navigate(['new'], {relativeTo: this.route});
  }

}
