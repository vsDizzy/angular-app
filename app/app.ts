import {Component, EventEmitter, OnInit, Pipe, PipeTransform} from 'angular2/core';
import {Observable} from 'rxjs/Rx';
import {Service} from './service';

interface Conversation {
  participants?: Array<any>;
  url?: string;
  id?: number;
  title?: string;
  hasUnreadMessage?: boolean;
}

@Pipe({ name: 'pipe' })
class FilterPipe implements PipeTransform {
  transform(value) {
    console.log(value);
    return value;
  }
}

@Component({
  selector: 'app',
  pipes: [FilterPipe],
  template: `
    <div>
      <span *ngFor="#i of c | async | pipe">
        {{i}}
      </span>
      <br />
      <span *ngFor="#i of c | async">
        {{i}}
      </span>
      <br />
      <span *ngFor="#i of c1 | async">
        {{i}}
      </span>
    </div>
  `,
})
export class App implements OnInit {
  c: Observable<number[]>;
  c1: Observable<any>;
  items;

  constructor(private _service: Service) {
    this.c = _service.observable.share();
    this.c1 = this.c;
  }

  ngOnInit() {
    let c1: Conversation = { hasUnreadMessage: false, title: 'aa' };
    let c2: Conversation = { hasUnreadMessage: true, title: 'bb' };
    let c3: Conversation = { hasUnreadMessage: false, title: 'cc' };
    this.items = Observable.of([c1, c2, c3]);
  }
}