import { Component, OnInit } from '@angular/core';
import { Home } from './home.model';
import { RecipeService } from '../services/recipe.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  recipeSelected : Home;

  constructor(private recipeService: RecipeService) { }

  ngOnInit() {

  }
}
