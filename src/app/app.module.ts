import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ReactiveFormsModule } from '@angular/forms';
import { CompanyListComponent } from './company/company-list/company-list.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClient, HttpHandler, provideHttpClient } from '@angular/common/http';
import { CompanyTableComponent } from './company/company-table/company-table.component';
import { MenuComponent } from './menu/menu.component';
import { CompanyEditComponent } from './company/company-edit/company-edit.component';
import { CompanyAddComponent } from './company/company-add/company-add.component';

@NgModule({
  declarations: [
    AppComponent,
    CompanyListComponent,
    CompanyTableComponent,
    MenuComponent,
    CompanyEditComponent,
    CompanyAddComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    NgbModule,
    
  ],
  providers: [
    provideHttpClient()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
