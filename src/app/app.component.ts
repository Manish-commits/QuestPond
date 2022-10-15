import { Component } from '@angular/core';
import { AccountShared } from './accountsShared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [AccountShared]
})
export class AppComponent {

  accounts = [
    {
      name: 'Master',
      status: 'active'
    },
    {
      name: 'Test acc',
      status: 'Inactive'
    },
    {
      name: 'Hidded',
      status: 'unknown'
    },
  ];

  onAccountAdded(newAccount: {name: string, status: string}) {
    this.accounts.push(newAccount);
  }

  onStatusChanged(updatesInfo: {id: number, newStatus: string}) {
    this.accounts[updatesInfo.id].status = updatesInfo.newStatus
  }
}
