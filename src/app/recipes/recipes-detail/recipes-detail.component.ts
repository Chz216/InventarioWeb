import { Component, OnInit, Input } from '@angular/core';
import { Recipes } from '../Recipes.model';


@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
@Input() recipe: Recipes;
  constructor() { }

  ngOnInit() {
  }

}
