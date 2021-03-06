import { Injectable, InjectionToken, Inject, Optional } from '@angular/core';

export const ERROR_LEVEL = new InjectionToken<number>('ERROR_LEVEL');

@Injectable()
export class LoggerService {
  private nivel: number = 5;

  constructor(@Inject(ERROR_LEVEL) @Optional() nivel: number) {
    if (nivel != null) {
      this.nivel = nivel;
    }
  }

  public error(msg: string): void {
    if (this.nivel > 0) {
      console.error(msg);
    }
  }
  public warn(msg: string): void {
    if (this.nivel > 1) {
      console.warn(msg);
    }
  }
  public info(msg: string): void {
    if (this.nivel > 2) {
      // tslint:disable-next-line:no-console
      if (console.info) {
        // tslint:disable-next-line:no-console
        console.info(msg);
      } else {
        console.log(msg);
      }
    }
  }
  public log(msg: string): void {
    if (this.nivel > 3) {
      console.log(msg);
    }
  }

}
