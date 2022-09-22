import { Component, OnInit, } from '@angular/core';
import { Customer, } from '../customer';
import { CustomerService, } from '../customer.service';

@Component({
  selector: 'app-hired',
  templateUrl: './hired.component.html',
  styleUrls: ['./hired.component.css']
})
export class HiredComponent implements OnInit {
  
  customers: Customer[] = [];

  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getCustomers();
  }

  getCustomers(): void {
    this.customerService?.getCustomers()
      ?.subscribe(customers => this.customers = customers);
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
