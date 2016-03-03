import {Injectable} from 'angular2/core';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class Service {
  counter: number = 0;
  values = [];
  observable: Observable<any>;

  constructor() {
    this.observable = Observable.create(observer => {
      setInterval(() => {
        this.values.push(++this.counter);
        observer.next(this.values);
      }, 1000);
    });
  }
}