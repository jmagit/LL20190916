import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { AjaxWaitComponent } from './ajax-wait';



@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,
    AjaxWaitComponent,
  ],
  exports: [
    HomeComponent,
    NotificationComponent,
    AjaxWaitComponent,
  ],
  imports: [
    CommonModule
  ]
})
export class MainModule {
  constructor( @Optional() @SkipSelf() parentModule: MainModule) {
    if (parentModule) {
      const msg = `MainModule) has already been loaded.
        Import MainModule) once, only, in the root AppModule.`;
      throw new Error(msg);
    }
  }
}

