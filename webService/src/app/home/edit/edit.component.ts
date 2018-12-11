import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { RecipeService } from 'src/app/services/recipe.service';
import { Home } from '../home.model';


@Component({
  selector: 'app-edit',  
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;
  constructor(private route: ActivatedRoute, private RecipeService: RecipeService,private router:Router) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params)=>{
      this.id = +params['id'];
      this.editMode = params['id'] !=null;
      this.initForm();
    });
  }

  private initForm(){
    let recipeName ='';
    let recipeImagePath = '';
    let recipeDescription ='';
    const ingredients = new FormArray([]);

    if(this.editMode){
      const recipe = this.RecipeService.getRecipe(this.id);
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

  onSubmit(){
    const recipe = this.recipeForm.value;
    const newRecipe = new Home(recipe.name, recipe.description, recipe.imagePath, recipe.ingredients);
    if (this.editMode) {
      this.RecipeService.updateRecipe(this.id, newRecipe);
      this.onCancel();
    }else{
      this.RecipeService.addRecipe(newRecipe);
      this.onCancel();
    }
  }
  onDeleteIngredient(index:number){
    (<FormArray>this.recipeForm.get('ingredients')).removeAt(index);
  }

  onCancel(){
    this.router.navigate(['../'],{relativeTo:this.route});
  }
}