import { inject, Injectable } from '@angular/core';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable({
  providedIn: 'root'
})
export class BusyService {
  busyRequestCout = 0;
  private spinnerService = inject(NgxSpinnerService);

  busy() {
    this.busyRequestCout++;
    this.spinnerService.show(undefined, {
      type: 'line-scale-party',
      bdColor: 'rgba(0, 0, 0, 0.4)',
      color: '#333333'
    })
  }

  idle() {
    this.busyRequestCout--;
    if (this.busyRequestCout <= 0) {
      this.busyRequestCout = 0;
      this.spinnerService.hide();
    }
  }
}
