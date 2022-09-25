import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-list',
  templateUrl: './recepie-list.component.html',
  styleUrls: ['./recepie-list.component.css']
})
export class RecepieListComponent implements OnInit {

  recepies: Recepie[] = [
    new Recepie('A test Recepie-1', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
    new Recepie('A test Recepie-2', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
    new Recepie('A test Recepie-3', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
    new Recepie('A test Recepie-4', 'Test recepie Description', 'https://cookieandkate.com/images/2021/08/grilled-pizza-recipe-2-1.jpg'),
  ];

  @Output() recepieWasSelected = new EventEmitter<Recepie>();

  constructor() { }

  ngOnInit(): void {
  }

  onRecepieSelected(recepie: Recepie) {
    this.recepieWasSelected.emit(recepie);
  }
}
