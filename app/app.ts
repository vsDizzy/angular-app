import {bootstrap} from 'angular2/platform/browser';
import {Component} from 'angular2/core';

export interface Endpoint { [key: string]: string; }

class Base {
  constructor() {
//    this['__proto__']['rr'] = 4;
    Base['rr'] = 4;
  }

  log(x) {
    console.log('base');
    console.log(x);
    console.log(this);
  }
}

class Child extends Base {
  log(x) {
    console.log('child');
    super.log(x);
  }
}

@Component({
  selector: 'app',
  template: `
  `
})
export class App {
  constructor() {
    let c = new Child();
    c.log('aaa');
  }
}

bootstrap(App);