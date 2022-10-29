import { Output, EventEmitter, Injectable } from '@angular/core';
import { Ingredients } from 'src/app/shared/ingredients.model';
import { ShoppingListService } from 'src/app/shopping-list/shoppingList.service';
import { Recepie } from '../recepie.model';

@Injectable()

export class RecepieService {
  recepieSelected = new EventEmitter<Recepie>();

  private recepie: Recepie[] = [
    new Recepie(
      'A test recepie 1',
      'some description',
      'https://cdn.shopify.com/s/files/1/2628/9270/files/mango-2400_cab7a249-532b-46db-b779-5e6fb243b63f.jpg?v=1630140424',
      [
        new Ingredients('ing-1-1', 2),
        new Ingredients('ing-1-2', 4),
        new Ingredients('ing-1-3', 5),
        new Ingredients('ing-1-4', 9),
      ]
    ),
    new Recepie(
      'A test recepie 2',
      'some description',
      'https://res.cloudinary.com/hz3gmuqw6/image/upload/c_fill,q_60,w_750/food-trends-2021-phprMLwAP',
      [
        new Ingredients('ing-2-1', 52),
        new Ingredients('ing-2-2', 44),
        new Ingredients('ing-2-3', 25),
        new Ingredients('ing-2-4', 91),
    ]
    ),
    new Recepie(
      'A test recepie 3',
      'some description',
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9hPhtTXVihIPv8tSlzqNxJj-hrxetU6A03Q&usqp=CAU',
      [
        new Ingredients('ing-3-1', 20),
        new Ingredients('ing-3-2', 48),
        new Ingredients('ing-3-3', 51),
        new Ingredients('ing-3-4', 95),
    ]
    ),
  ];

  constructor(private slService: ShoppingListService) {}

  getRecepies() {
    return this.recepie.slice();
  }

  addIngredientToShoppingList(ingredients: Ingredients[]) {
    this.slService.addIngredientsFromRecepieList(ingredients);
  }
}
