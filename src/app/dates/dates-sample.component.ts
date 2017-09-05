import { Component, Inject } from '@angular/core';
import { momentToken, Moment } from './moment.lib';

@Component({
  selector: 'dates-sample',
  template: `
    <input jquiDatePicker type="text" [(ngModel)]="date" />
    {{ date | momentFromNow }}
  `
})
export class DatesSampleComponent {
  date: string;

  constructor( @Inject(momentToken) private moment: Moment) {
  }
}