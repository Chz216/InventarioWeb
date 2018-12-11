import { Ingredient } from "../shared/ingredient.model";
import { EventEmitter, ViewChild } from '@angular/core';
import { Subject } from "../../../node_modules/rxjs";
import { NgForm } from '@angular/forms';

export class IngredientsService {
ingredientsChange = new Subject<Ingredient[]>();
startedEditing = new Subject<number>();
@ViewChild('f') slForm:NgForm;
    ingredients: Ingredient [] = [
      new Ingredient ('Tomatoes', 5),
      new Ingredient ('Apples', 3)
    ];

    getIngredients() {
      return this.ingredients.slice();
    }

    getIngredient(index: number){
      return this.ingredients[index];
    }

    updateIngredient(index: number, ingredient: Ingredient){
      this.ingredients[index] = ingredient;
      this.ingredientsChange.next(this.ingredients.slice());
    }

    deleteIngredient(index: number){
      this.ingredients.splice(index, 1);
      this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredient(ingredient: Ingredient){
      this.ingredients.push(ingredient);
      this.ingredientsChange.next(this.ingredients.slice());
    }

    addIngredients(auxIngredients: Ingredient[]){
      for (const i of auxIngredients) {
        var ing = this.ingredients.find(Ingredient => Ingredient.name === i.name);

                if (ing !== undefined){
                    ing.amount = i.amount+ ing.amount;
                    //console.table(this.ingredients)
                }else{
                    this.ingredients.push(i);
                console.table(this.ingredients)
                }
      }
      this.ingredientsChange.next(this.ingredients.slice());
      console.table(this.ingredients);
    }

    clear(){
        this.slForm.reset();
    }
}
