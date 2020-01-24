import {Component, OnInit} from '@angular/core';
import {Customer} from '../../classes/customer';
import {CustomerRemove} from '../../store/customer/customer.actions';
import {CustomerAdd} from '../../store/customer/customer.actions';
import {CustomerSelect} from '../../store/customer/customer.actions';
import {Observable} from 'rxjs';
import {select, Store, State} from '@ngrx/store';
//Modal
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
// import { MyModalComponent } from './my-modal/my-modal.component';
import { ModalCreateCustomerComponent } from '../../components/modal-create-customer/modal-create-customer.component';



@Component({
  selector: 'app-customers-view',
  templateUrl: './customers-view.component.html',
  styleUrls: ['./customers-view.component.css']
})


export class CustomersViewComponent implements OnInit{

  customers: Observable<Customer[]>;
  selected$: Observable<Customer>;
  test$: Observable<Customer>;
  //modal
  gender: string;
  name: string;
  title: string =  "This is a selected theme of Material, never ever gonna use it again.";

  constructor(private store: Store<{ customers: Customer[], selectedStoreModule: Customer }>, public dialog: MatDialog) {
    this.customers  = store.pipe(select('customers'));
  }

  ngOnInit(){
    this.store.select<any>('selectedStoreModule').subscribe(state => {
      // console.log(state);
      this.selected$ = state;
    });

  }

  removeCustomer(customerIndex) {
    // console.log('removeCustomer');
    this.store.dispatch(new CustomerRemove(customerIndex));
  }

  selectCustomer(customerIndex){
    // console.log('customerIndex - select function');
    this.store.dispatch(new CustomerSelect(customerIndex));
  }

  toggleCartShirts(customer){
    //console.log(customer.toggleCartShirts);
    customer.toggleCartShirts = true;
  }


  openDialog(): void {
    const dialogRef = this.dialog.open(ModalCreateCustomerComponent, {
      width: '850px',
      data: { title: this.title, name: this.name, gender: this.gender }
    });

    dialogRef.afterClosed().subscribe(res => {
      this.name = "";
      console.log(res);
      if(res){
        const customer = new Customer(); 
        customer.name = res.name; 
        customer.gender = res.gender;
        this.store.dispatch(new CustomerAdd(customer)); 
      }
    });
  }


}