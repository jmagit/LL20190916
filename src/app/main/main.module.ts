import { NgModule, SkipSelf, Optional } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { NotificationComponent } from './notification/notification.component';
import { AjaxWaitComponent } from './ajax-wait';
import { MenuComponent } from './menu/menu.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from '../app-routing.module';



@NgModule({
  declarations: [
    HomeComponent,
    NotificationComponent,
    AjaxWaitComponent,
    MenuComponent,
    PageNotFoundComponent,
  ],
  exports: [
    HomeComponent,
    NotificationComponent,
    AjaxWaitComponent,
    MenuComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule, AppRoutingModule,
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

