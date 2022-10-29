import { EventEmitter } from "@angular/core";
import { Ingredients } from "../shared/ingredients.model";

export class ShoppingListService {

    ingredientChanged = new EventEmitter<Ingredients[]>();
    
    private ingredients: Ingredients[] = [
        new Ingredients("Apples", 3),
        new Ingredients("banana", 5),
        new Ingredients("chiku", 7),
    ];

    getIngredients() {
        return this.ingredients.slice();
    }

    addedNewIngredient(ingredient: Ingredients) {
        this.ingredients.push(ingredient);
        this.ingredientChanged.emit(this.getIngredients());
    }

    addIngredientsFromRecepieList(ingredients: Ingredients[]) {
        // for(let ingredient of ingredients){
        //     this.addedNewIngredient(ingredient);
        // }

        this.ingredients.push(...ingredients);
        this.ingredientChanged.emit(this.ingredients.slice());
    }
}