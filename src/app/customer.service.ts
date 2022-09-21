import { Injectable, } from '@angular/core';
import { HttpClient, HttpHeaders, } from '@angular/common/http';

import { Observable, of, } from 'rxjs';
import { catchError, tap, } from 'rxjs/operators';

import { Customer, } from './customer';
import { MessageService, } from './message.service';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customersUrl = 'https://620e9760ec8b2ee28326ae84.mockapi.io/api/1/users';

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  constructor(
    private http: HttpClient,
    private messageService: MessageService) { }

  getCustomers(): Observable<Customer[]> {
    return this.http.get<Customer[]>(this.customersUrl)
      .pipe(
        tap(_ => this.log('fetched customers')),
        catchError(this.handleError<Customer[]>('getCustomers', []))
      );
  }

  getCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;
    return this.http.get<Customer>(url)
      .pipe(
        tap(_ => this.log(`fetched customer id=${id}`)),
        catchError(this.handleError<Customer>(`getCustomer id=${id}`))
      );
  }

  updateCustomer(customer: Customer): Observable<any> {
    return this.http.put(this.customersUrl, customer, this.httpOptions)
      .pipe(
        tap(_ => this.log(`updated customer id=${customer.id}`)),
        catchError(this.handleError<any>('updateCustomer'))
      );
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(this.customersUrl, customer, this.httpOptions)
      .pipe(
        tap((newCustomer: Customer) => this.log(`added customer w/ id=${newCustomer.id}`)),
        catchError(this.handleError<Customer>('addCustomer'))
      );
  }

  deleteCustomer(id: number): Observable<Customer> {
    const url = `${this.customersUrl}/${id}`;

    return this.http.delete<Customer>(url, this.httpOptions)
      .pipe(
        tap(_ => this.log(`deleted customer id=${id}`)),
        catchError(this.handleError<Customer>('deleteCustomer'))
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
      console.error(error);
      this.log(`${operation} failed: ${error.message}`);
      return of(result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`CustomerService: ${message}`);
  }
}
