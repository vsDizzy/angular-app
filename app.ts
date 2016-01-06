import {Component} from 'angular2/ts/core';

@Component({ selector: 'my-app', template: 'hello world' })
export class App {
  constructor() {
    console.log('ok');
  }
}