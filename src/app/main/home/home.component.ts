import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'curso';

  // constructor(notify: NotificationService) {
  //   notify.add('Esto es una demo.');
  //   notify.remove(0);
  //   notify.add(null);
  //   notify.remove(0);
  // }
  // constructor(out: LoggerService) {
  //   out.error('Estos es un error.');
  //   out.warn('Estos es un warn.');
  //   out.info('Estos es un info.');
  //   out.log('Estos es un log.');
  // }

  ngOnInit() {
  }

}
