import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { data } from './data';

@Injectable()
export class DataService {
    getAngularApi(): Observable<typeof data> {
        return Observable.of(data);
    }
}