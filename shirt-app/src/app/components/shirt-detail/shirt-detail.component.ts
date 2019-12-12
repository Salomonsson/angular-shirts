import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

import { ShirtService }  from '../../services/shirt/shirt.service';
import { Shirt } from '../../classes/shirt';


@Component({
  selector: 'app-shirt-detail',
  templateUrl: './shirt-detail.component.html',
  styleUrls: ['./shirt-detail.component.css']
})
export class ShirtDetailComponent implements OnInit {
  @Input() shirt: Shirt;
  

  constructor(
    private route: ActivatedRoute,
    private shirtService: ShirtService,
    private location: Location
  ) {}

  ngOnInit(): void {
    this.getHero();
  }
  
  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this.shirtService.getShirt(id)
      .subscribe(shirt => this.shirt = shirt);
  }

  goBack(): void {
    this.location.back();
  }

  
}
