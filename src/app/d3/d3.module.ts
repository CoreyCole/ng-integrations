import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { APP_BASE_HREF, CommonModule } from '@angular/common';
import { HttpModule } from '@angular/http';
import { D3SampleComponent } from './d3-sample.component';
import { RouterModule } from '@angular/router';
import { d3Token, d3 } from './d3.lib';
import { D3SampleChart } from './d3-sample-chart.component';
import { DataService } from './data.service';

@NgModule({
  imports: [
    RouterModule.forChild([
        { path: '', component: D3SampleComponent, pathMatch: 'full'}
    ])
  ],
  declarations: [ 
    D3SampleChart,
    D3SampleComponent 
  ],
  providers: [
    DataService,
    { provide: d3Token, useValue: d3 }
  ],
  exports: [ D3SampleComponent ]
})
export class D3Module {}
