import { NgModule, } from '@angular/core';
import { RouterModule, Routes, } from '@angular/router';
import { CustomersComponent, } from './customers/customers.component';
import { HiredComponent, } from './hired/hired.component';
import { CustomerDetailComponent } from './customer-detail/customer-detail.component';

const routes: Routes = [
  { path: '', redirectTo: '/hired', pathMatch: 'full' },
  { path: 'customers', component: CustomersComponent },
  { path: 'hired', component: HiredComponent },
  { path: 'detail/:id', component: CustomerDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
