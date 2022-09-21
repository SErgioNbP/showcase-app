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

  add(name: string): void {
    name = name.trim();
    if (!name) { return; }
    this.CustomerService.addCustomer({ name } as Customer)
      .subscribe(customer => {
        this.customers.push(customer);
      });
  }

  delete(customer: Customer): void {
    this.customers = this.customers.filter(h => h !== customer);
    this.CustomerService.deleteCustomer(customer.id).subscribe();
  }
}
