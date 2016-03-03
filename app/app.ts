import {Component, EventEmitter} from 'angular2/core';

@Component({
  selector: 'child',
  template: `
    <div>
      counter: {{counter}}
    </div>
  `,
  inputs: ['counter'],
  outputs: ['changed']
})
export class Child {
  public counter: number;
  public changed: EventEmitter<any> = new EventEmitter();

  constructor() {
    setInterval(() => {
      this.counter++;
      this.changed.emit(this);
    }, 1000);
  }
}

@Component({
  selector: 'app',
  directives: [Child],
  template: `
    <div>
      current: {{current}}
      <child [counter]="current" (changed)="cc($event)"></child>
    </div>
  `
})
export class App {
  current: number = 3;

  cc(evt) {
    this.current = evt.counter;
  }
}