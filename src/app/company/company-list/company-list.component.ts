import { AfterViewInit, Component, OnDestroy, OnInit } from '@angular/core';
import { Company } from '../company.model';
import { CompanyService } from '../company.service';
import { Observable, Subject, Subscription, debounceTime, distinctUntilChanged, map, of, startWith, switchMap, takeUntil } from 'rxjs';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'fbc-company-list',
  templateUrl: './company-list.component.html',
  styleUrl: './company-list.component.scss'
})
export class CompanyListComponent implements OnInit, AfterViewInit{
  companies$: Observable<Company[]> = of([]);
  companies:Company[] = [];
  formGroup: FormGroup;
  companiesSubcription?: Subscription;
  onDestroy = new Subject();

  constructor(private readonly companyService: CompanyService, private fb: FormBuilder){
    this.formGroup = this.fb.group({
      searchControl: new FormControl('')
    })
  }

  ngAfterViewInit(): void {
    
  }

  get searchControl(): FormControl {
    return this.formGroup.get('searchControl') as FormControl;
  }

  ngOnInit(): void {
    this.getCompanies();
  }
  
  getCompanies() {
    // this.companies$ = this.companyService.getCompanies().pipe(
    //   untilDestroyed(this)
    // );
    this.companies$ = this.searchControl.valueChanges.pipe(
      untilDestroyed(this),
      debounceTime(500),
      distinctUntilChanged(),
      startWith(undefined),
      switchMap(s => this.companyService.getCompanies())
    );
  }

  addCompany(e: any) {

  }

  editCompany(item: Company | any) {
    this.companyService.updateCompany(item).pipe(
      untilDestroyed(this)
    )
  }
  deleteCompany(item: Company | any) {
    this.companyService.deleteCompany(item.id).pipe(
      untilDestroyed(this)
    )
    .subscribe(_ => this.companyService.getCompanies())
  }

}

