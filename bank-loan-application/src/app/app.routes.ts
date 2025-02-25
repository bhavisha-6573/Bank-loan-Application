import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'newApplication',
    pathMatch: 'full'
  },
  {
    path: 'newApplication',
    component: LoanApplicationComponent
  },
  {
    path: 'applicationList',
    component: ApplicationListComponent 
  }
];
