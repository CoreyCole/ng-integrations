import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { ChartDataElement } from './chart-data-element';
import { data as apiData } from './data';

@Component({
  selector: 'd3-sample',
  template: `
    <h3>Here's an awesome chart about Angular</h3>
    <d3-sample-chart [data]="data"></d3-sample-chart>
  `
})
export class D3SampleComponent implements OnInit {
  data: ChartDataElement[];

  constructor(private dataService: DataService) {}

  ngOnInit() {
    this.dataService.getAngularApi()
      .subscribe(rawData => this.data = this.transformData(rawData));
  }

  transformData(rawData: typeof apiData): ChartDataElement[] {
    const categories = rawData.map(c => {
      return c.items.map(i => ({
        category: c.title,
        name: i.title,
        value: i.title.length
      }));
    });
    const data: ChartDataElement[] = [
      { category: undefined, name: 'Angular', value: undefined }
    ].concat(rawData.map(c => ({ category: 'Angular', name: c.title, value: undefined })));
    return data.concat(categories.reduce((prev, curr) => prev.concat(curr), []));
  }
}