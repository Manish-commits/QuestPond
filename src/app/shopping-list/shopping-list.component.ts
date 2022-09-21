import { Component, OnInit } from '@angular/core';
import { Ingredients } from '../shared/ingredients.model';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']
})
export class ShoppingListComponent implements OnInit {

  ingredients: Ingredients[] = [
    new Ingredients("Apples", 3),
    new Ingredients("banana", 5),
    new Ingredients("chiku", 7),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
