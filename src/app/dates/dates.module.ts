import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { momentToken, moment } from './moment.lib';
import { DatesSampleComponent } from './dates-sample.component';
import { MomentFromNowPipe } from './moment-from-now.pipe';
import { JquiDatePickerDirective } from './jqui-date-picker.directive';

@NgModule({
  imports: [
    FormsModule,
    RouterModule.forChild([
      { path: '', component: DatesSampleComponent, pathMatch: 'full' }
    ])
  ],
  declarations: [
    MomentFromNowPipe,
    DatesSampleComponent,
    JquiDatePickerDirective
  ],
  providers: [
    { provide: momentToken, useValue: moment }
  ]
})
export class DatesModule { }
