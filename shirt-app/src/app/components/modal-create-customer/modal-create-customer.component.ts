import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA} from '@angular/material';
import {Customer} from '../../classes/customer';

@Component({
  selector: 'app-modal-create-customer',
  templateUrl: './modal-create-customer.component.html',
  styleUrls: ['./modal-create-customer.component.css']
})
export class ModalCreateCustomerComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<ModalCreateCustomerComponent>,
    @Inject(MAT_DIALOG_DATA) public data: Customer) 
  { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  ngOnInit() {
  }

}



