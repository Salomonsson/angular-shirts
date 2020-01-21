// import { Component, OnInit } from '@angular/core';
import { Component, Input, Output, EventEmitter } from '@angular/core';

import {Shirt} from '../../classes/shirt';


@Component({
  selector: 'app-customer-selected',
  templateUrl: './customer-selected.component.html',
  styleUrls: ['./customer-selected.component.css']
})


export class CustomerSelectedComponent {

  @Input() shirtobjects: any[];

  @Output() deleteObjectEmitter = new EventEmitter<string>();

  constructor() {}

  /**
   * pass the object to be removed to parent component
   * @param object - object shirt of app state array
   */
  deleteShirtObject(object) {
    this.deleteObjectEmitter.emit(object); // emit username on click
  }


}
