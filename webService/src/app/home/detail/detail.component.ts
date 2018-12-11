import { Component, OnInit, Input } from '@angular/core';
import { Home } from '../home.model';
import { RecipeService } from 'src/app/services/recipe.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
 recipe: Home;
 id: number;
  constructor(private recipeService: RecipeService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params) =>{
      this.id = +param['id'];
      this.recipe= this.recipeService.getRecipe(this.id);
  });
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDelateRecipe(){
    this.route.params.subscribe((param:Params) =>{
      this.id = +param['id'];
      this.recipeService.onDelateRecipe(this.id);
      this.router.navigate(['../'],{relativeTo:this.route});
  });
  }
}
