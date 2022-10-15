import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { LoggingService } from '../logging.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent implements OnInit {

  @Input() account!: { name: string; status: string; };
  @Input() id!: number;
  @Output() statusChanged = new EventEmitter<{id: number, newStatus: string}>();

  constructor(private loggingService: LoggingService) { }

  ngOnInit(): void {
  }

  onSetTo(status: string) {
    this.statusChanged.emit({
      id: this.id,
      newStatus: status
    })
    // console.log("new status "+ status);

    this.loggingService.logStatusChanges(status);
  }

}
