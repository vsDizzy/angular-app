import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

@Component({
  selector: 'app',
  template: `
    <div>
      {{counter}}
    </div>
  `
})
export class App {
  counter = 0;

  constructor() {
    setInterval(() => {
      this.counter++;
    }, 1000);
  }
}

bootstrap(App);