import { Component, OnInit } from '@angular/core';
import { NotificationService, NotificationType } from 'src/app/app-common';

@Component({
  selector: 'app-notification',
  templateUrl: './notification.component.html',
  styleUrls: ['./notification.component.css']
})
export class NotificationComponent implements OnInit {
  public readonly NotificationType = NotificationType;

  constructor(private notify: NotificationService) { }

  public get VM() { return this.notify; }

  ngOnInit() {
  }

}
