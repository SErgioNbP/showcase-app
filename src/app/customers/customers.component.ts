import { Component, OnInit } from '@angular/core';
import { Customer, } from '../customer';
import { CUSTOMERS, } from '../customers';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers = CUSTOMERS;
  selectedCustomer?: Customer;

  constructor() { }

  ngOnInit(): void {
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
  }

}
