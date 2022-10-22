import { Component, OnInit } from '@angular/core';
import { RecepieService } from './recepie-list/recepie.service';
import { Recepie } from './recepie.model';

@Component({
  selector: 'app-recepies',
  templateUrl: './recepies.component.html',
  styleUrls: ['./recepies.component.css'],
  providers: [RecepieService]
})
export class RecepiesComponent implements OnInit {

  recepieSelected!: Recepie;

  constructor(private recepieService: RecepieService) { }

  ngOnInit(): void {
    this.recepieService.recepieSelected.subscribe( (recepie: Recepie) => {
      this.recepieSelected = recepie;
    }
    );
  }

}
