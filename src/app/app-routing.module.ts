import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';

export const APPROUTES: Routes = [
  {
    path: 'company/list',
    component: CompanyListComponent
  },
  {
    path: 'company/add',
    component: CompanyEditComponent
  },
  {
    path: 'company/edit/:id',
    component: CompanyEditComponent
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule)
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'company/list'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(APPROUTES)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
