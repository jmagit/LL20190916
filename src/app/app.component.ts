import { Component } from '@angular/core';
import { LoggerService } from 'src/indra-core';
import { NotificationService } from './app-common';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
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
}
