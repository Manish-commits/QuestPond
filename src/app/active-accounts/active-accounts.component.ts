import { Component, OnInit } from '@angular/core';
import { AccountShared } from '../accountsShared.service';

@Component({
  selector: 'app-active-accounts',
  templateUrl: './active-accounts.component.html',
  styleUrls: ['./active-accounts.component.css']
})
export class ActiveAccountsComponent implements OnInit {

  users!: string[];

  constructor(private accountsShared: AccountShared) { }

  ngOnInit(): void {
    this.users = this.accountsShared.activeUsers;
  }

  setToInactive(id: number) {
    this.accountsShared.setToInactive(id);
  }
}
