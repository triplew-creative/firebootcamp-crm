import { Component } from '@angular/core';
import { UntilDestroy } from '@ngneat/until-destroy';
import { CompanyService } from './company/company.service';
import { map } from 'rxjs';
@UntilDestroy()
@Component({
  selector: 'fbc-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Angular Superpowers App';
  companyCount$ = this.companyService.getCompanies().pipe(
    map(x => x.length)
  )
  constructor(private companyService: CompanyService){
    
  }
}
