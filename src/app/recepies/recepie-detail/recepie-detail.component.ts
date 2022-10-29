import { Component, Input, OnInit } from '@angular/core';
import { RecepieService } from '../recepie-list/recepie.service';
import { Recepie } from '../recepie.model';

@Component({
  selector: 'app-recepie-detail',
  templateUrl: './recepie-detail.component.html',
  styleUrls: ['./recepie-detail.component.css']
})
export class RecepieDetailComponent implements OnInit {
  @Input() recepie!: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
  }

  onAddToShoppingList() {
    this.recepieService.addIngredientToShoppingList(this.recepie.ingredients);
  }

}
