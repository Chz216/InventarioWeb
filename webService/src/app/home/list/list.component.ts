import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Home } from '../home.model';  
import { RecipeService } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})

export class ListComponent implements OnInit {
 
 @Output() recipeWasSelected = new EventEmitter<Home>();

 recipes: Home[];
 private subscirbe: Subscription;
  constructor(private recipeService: RecipeService, private router: Router,
    private route:ActivatedRoute) { }
 
  ngOnInit() {
  this.recipes = this.recipeService.getRecipes();
  this.subscirbe= this.recipeService.recipesChanged.subscribe((recipes:Home[])=>{
    this.recipes=recipes;

  })
  }

 onNewRecipe(){
this.router.navigate(['new'],{relativeTo: this.route});
 }
}
