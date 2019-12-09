import { Component, OnInit } from '@angular/core';
import { Shirt } from '../classes/shirt';
import { SHIRTS } from '../mock-shirts';


@Component({
  selector: 'app-shirts',
  templateUrl: './shirts.component.html',
  styleUrls: ['./shirts.component.css']
})
export class ShirtsComponent implements OnInit {
  //import the array of fake shirts
  shirtsFakeArray = SHIRTS;
  selectedShirt: Shirt;
  
  constructor() { }

  ngOnInit() {
  }

  onSelect(shirt: Shirt): void {
    this.selectedShirt = shirt;
  }
  
}
