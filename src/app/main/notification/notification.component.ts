import { Component, OnInit } from '@angular/core';
import { NotificationService } from 'src/app/app-common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {

  constructor(private notify: NotificationService) { }

  public get VM() { return this.notify; }

  ngOnInit() {
  }

}
