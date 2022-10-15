import { Component, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  providers: [LoggingService]
})
export class NewAccountComponent implements OnInit {

  @Output() accountAdded = new EventEmitter<{name: string, status: string}>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onCreateAccount(accountName: string, accountStatus: string) {
    this.accountAdded.emit({
      name: accountName,
      status: accountStatus
    })
    // console.log(accountStatus);

  //  const logService = new LoggingService();
  //  logService.logStatusChanges(accountStatus);
  
    this.loggingService.logStatusChanges(accountStatus);

  }

}