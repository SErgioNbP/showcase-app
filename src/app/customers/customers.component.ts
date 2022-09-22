import { Component, OnInit, } from '@angular/core';

import { Customer, } from '../customer';
import { CustomerService, } from '../customer.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];

  constructor(private CustomerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.CustomerService?.getCustomers()
      ?.subscribe(customers => this.customers = customers);
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h !== customer);
    this.CustomerService.deleteCustomer(customer.id).subscribe();
  }

  isBirthday(customer: Customer) {
    const birthDayMonth = new Date(customer.birthDate).getMonth();
    const month = new Date().getMonth();

    if(birthDayMonth === month) {
      return true;
    }
    return false;
  }
}
