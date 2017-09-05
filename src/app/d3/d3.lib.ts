import { InjectionToken } from '@angular/core';
import * as d3Lib from 'd3';

export const d3Token = new InjectionToken('d3');
export const d3 = d3Lib;
export type D3 = typeof d3Lib;
export * from 'd3';