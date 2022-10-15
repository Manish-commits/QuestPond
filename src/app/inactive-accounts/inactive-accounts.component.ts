import { Component, OnInit } from '@angular/core';
import { AccountShared } from '../accountsShared.service';

@Component({
  selector: 'app-inactive-accounts',
  templateUrl: './inactive-accounts.component.html',
  styleUrls: ['./inactive-accounts.component.css']
})
export class InactiveAccountsComponent implements OnInit {

  users!: string[];

  constructor(private accountsShared: AccountShared) { }

  ngOnInit(): void {
    this.users = this.accountsShared.inactiveUsers;
  }

  setToActive(id: number) {
    this.accountsShared.setToActive(id);
  }

}
