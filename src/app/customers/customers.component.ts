import { Component, OnInit, } from '@angular/core';
import { Customer, } from '../customer';
import { CustomerService, } from '../customer.service';
import { MessageService, } from '../message.service';

@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {

  customers: Customer[] = [];
  selectedCustomer?: Customer;
  customerService: any;

  constructor(private CustomerService: CustomerService, 
    private messageService: MessageService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  onSelect(customer: Customer): void {
    this.selectedCustomer = customer;
    this.messageService.add(`CustomersComponent: Selected customer id=${customer.id}`);
  }

  getCustomers(): void {
    this.customerService.getCustomers()
        .subscribe((customers: Customer[]) => this.customers = customers);
  }
}
