import { Component } from '@angular/core';

/**
 * Generated class for the AComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'c',
  templateUrl: 'a.html'
})
export class AComponent {d

  text: string;

  constructor() {
    console.log('Hello AComponent Component');
    this.text = '这是A组件';
  }
  get(){
    console.log('a组件的方法');
  }

}
