import { InjectionToken } from '@angular/core';
import * as momentLib from 'moment';

export const momentToken = new InjectionToken('moment');
export const moment = momentLib;
export type MomentStatic = typeof momentLib;
export { Moment } from 'moment';
