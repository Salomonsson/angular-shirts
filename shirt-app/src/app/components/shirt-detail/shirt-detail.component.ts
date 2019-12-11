import { Component, OnInit, Input } from '@angular/core';
import { Shirt } from '../../classes/shirt';


@Component({
  selector: 'app-shirt-detail',
  templateUrl: './shirt-detail.component.html',
  styleUrls: ['./shirt-detail.component.css']
})
export class ShirtDetailComponent implements OnInit {
  @Input() shirt: Shirt;
  

  constructor() { }

  ngOnInit() {
  }

}
