import { Component, OnInit } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[] = [
    new Recepie('A test Recepie', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
    new Recepie('A test Recepie', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
    new Recepie('A test Recepie', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
    new Recepie('A test Recepie', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
