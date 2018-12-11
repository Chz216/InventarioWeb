import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '../../../../node_modules/@angular/router';
import { RecipeService } from '../../services/recipe.service';
import { FormGroup, FormControl, FormArray, Validators } from '../../../../node_modules/@angular/forms';
import { Recipes } from '../recipes.model';

@Component({
  selector: 'app-recipes-edit',
  templateUrl: './recipes-edit.component.html',
  styleUrls: ['./recipes-edit.component.css']
})
export class RecipesEditComponent implements OnInit {
id: number;
editMode = false;
recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router:Router) { }

  ngOnInit() {
    this.route.params
    .subscribe((params: Params ) => {
      this.id = +params['id'];
      this.editMode = params['id'] != null;
      console.log(this.editMode);
      this.initForm();
    });
  }

  private initForm(){
    let recipeName ='';
    let recipeImagePath = '';
    let recipeDescription ='';
    const ingredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.recipeService.getRecipe(this.id);
      recipeName=recipe.name;
      recipeImagePath=recipe.imagePath;
      recipeDescription=recipe.description;
      if(recipe['ingredients']){
        for (const ingredient of recipe.ingredients){
          ingredients.push(
            new FormGroup({
              'name' : new FormControl(ingredient.name,Validators.required),
              'amount' : new FormControl(ingredient.amount,
                [ Validators.required,
                Validators.pattern(/^[1-9]+[0-9]*$/)
                ])
            })
          );
        }
      }
    }
    this.recipeForm = new FormGroup({
      'name' : new FormControl(recipeName,Validators.required),
      'imagePath' : new FormControl(recipeImagePath,Validators.required),
      'description' : new FormControl(recipeDescription,Validators.required),
      'ingredients' : ingredients
    });
  }

  onSubmit(){
    const recipe = this.recipeForm.value;
    const newRecipe = new Recipes(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    if (this.editMode) {
      this.recipeService.updateRecipe(this.id, newRecipe);
      this.onCancel();
    }else{
      this.recipeService.addRecipe(newRecipe);
      this.onCancel();
    }
  }

  onAddIngredient(){
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        'name': new FormControl(null,Validators.required),
        'amount': new FormControl(null,[
          Validators.required,
          Validators.pattern(/^[1-9]+[0-9]*$/)
        ])
      })
    )
  }
  
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }

}
