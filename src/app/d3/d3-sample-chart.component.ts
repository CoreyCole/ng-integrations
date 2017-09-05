import { Component, ViewChild, ElementRef, Input, Inject, AfterViewInit, OnChanges } from '@angular/core';
import { DSVRowAny, DSVRowString, HierarchyNode } from 'd3';
import { D3, d3Token, HierarchyCircularNode } from './d3.lib';
import { ChartDataElement } from './chart-data-element';

@Component({
  selector: 'd3-sample-chart',
  template: `
  <svg #svg 
    width="960" height="960" 
    font-family="sans-serif" font-size="10" 
    text-anchor="middle"></svg>`
})
export class D3SampleChart implements AfterViewInit, OnChanges {

  @ViewChild('svg') svg: ElementRef;
  @Input('data') data: ChartDataElement[];
  private initialized = false;

  constructor( @Inject(d3Token) private d3: D3) { }

  ngAfterViewInit() {
    this.initialized = true;
    this.drawChart();
  }

  ngOnChanges() {
    this.drawChart();
  }

  drawChart() {
    if (!this.initialized || !this.data)
      return;

    const d3 = this.d3;
    const svg = d3.select(this.svg.nativeElement),
      width = +svg.attr("width"),
      height = +svg.attr("height");

    const format = d3.format(",d");

    const color = d3.scaleOrdinal(d3.schemeCategory20c);

    const pack = d3.pack<ChartDataElement>()
      .size([width, height])
      .padding(1.5);

    const root = d3.stratify<ChartDataElement>()
      .id(d => d.name)
      .parentId(d => d.category)
      (this.data)
      .sum(d => d.value);


    const node = svg.selectAll(".node")
      .data(pack(root).leaves())
      .enter().append("g")
      .attr("class", "node")
      .attr("transform", d => `translate(${d.x},${d.y})`);

    node.append("circle")
      .attr("id", d => d.id)
      .attr("r", d => d.r)
      .style("fill", d => color(d.data.category));

    node.append("clipPath")
      .attr("id", d => `clip-${d.id}`)
      .append("use")
      .attr("xlink:href", d => `#${d.id}`);

    node.append("text")
      .attr("clip-path", d => `url(#clip-${d.id})`)
      .selectAll("tspan")
      .data(d => [d.data.name])
      .enter().append("tspan")
      .attr("x", 0)
      .attr("y", (d, i, nodes) => 13 + (i - nodes.length / 2 - 0.5) * 10)
      .text(d => d);

    node.append("title")
      .text(d => d.id + "\n" + format(d.value));
  }

}
