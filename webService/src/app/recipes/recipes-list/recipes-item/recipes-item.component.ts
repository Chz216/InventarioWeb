import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../../recipes.model';
import { RecipeService } from '../../../services/recipe.service';


@Component({
  selector: 'app-recipes-item',
  templateUrl: './recipes-item.component.html',
  styleUrls: ['./recipes-item.component.css']
})
export class RecipesItemComponent implements OnInit {
@Input() recipe: Recipes;
@Input() index: number;


  constructor() { }

  ngOnInit() {
  }


}
