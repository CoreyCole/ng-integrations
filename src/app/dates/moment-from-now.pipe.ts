import { Pipe, PipeTransform, Inject } from '@angular/core';
import { Moment, momentToken, MomentStatic } from './moment.lib';

@Pipe({
    name: 'momentFromNow',
    pure: false
})
export class MomentFromNowPipe implements PipeTransform {
    constructor(@Inject(momentToken) private moment: MomentStatic) {}

    transform(date: string | Date | Moment) {
        if (!this.moment.isMoment(date))
            date = this.moment(date);

        return date.fromNow();
    }
}