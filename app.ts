import {Component} from 'angular2/core';

@Component({ selector: 'my-app', template: 'hello world' })
export class App {
  constructor() {
    console.log('ok');
  }
}