import { Injectable, } from '@angular/core';

import { Observable, of, } from 'rxjs';

import { Customer, } from './customer';
import { CUSTOMERS, } from './customers';
import { MessageService, } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  constructor(private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    const customers = of(CUSTOMERS);
    this.messageService.add('CustomerService: fetched customers');
    return customers;
  }

  getCustomer(id: number): Observable<Customer> {
    const customer = CUSTOMERS.find(c => c.id === id)!;
    this.messageService.add(`CustomerService: fetched customer id=${id}`);
    return of(customer);
  }
}
