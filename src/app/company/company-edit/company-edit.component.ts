import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Company } from '../company.model';
import { VALIDATIONMESSAGES } from '../../validation-messages';
import { CompanyService } from '../company.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'fbc-company-edit',
  templateUrl: './company-edit.component.html',
  styleUrl: './company-edit.component.scss'
})
export class CompanyEditComponent implements OnInit  {
   
  @Output() saveCompany = new EventEmitter<Company>;
  formGroup: FormGroup;
  companyId: number = 0;
  isAdd: boolean = false;

  get nameControl(): FormControl {
    return this.formGroup.get('name') as FormControl;
  }

  get emailControl(): FormControl {
    return this.formGroup.get('email') as FormControl;
  }

  get phoneControl(): FormControl {
    return this.formGroup.get('phone') as FormControl;
  }

  get checkPhoneControl(): FormControl {
    return this.formGroup.get('checkPhone') as FormControl;
  }

  constructor(
    private fb: FormBuilder, 
    private companyService: CompanyService, 
    private activatedRoute: ActivatedRoute,
    private router: Router){
    this.formGroup = this.fb.group({
      name: this.fb.control('', [Validators.required, Validators.minLength(3)]),
      email: this.fb.control('', [Validators.required, Validators.email]),
      phone: this.fb.control('', Validators.required),
      checkPhone: this.fb.control(false)
    })
  }
  ngOnInit(): void {
    this.companyId = +this.activatedRoute.snapshot.params['id'];

    this.isAdd = !this.companyId;
    if (!this.isAdd) {
      this.companyService.getCompany(this.companyId).subscribe(x => this.formGroup.patchValue({
        name: x.name,
        email: x.email,
        phone: x.phone,
        checkPhone: x.phone ?? false
      }))
    }
    
    this.checkPhoneControl.valueChanges.subscribe({
      next: (val) => {
        if (val) {
          this.phoneControl.enable({emitEvent: false});
        }
        else {
          this.phoneControl.disable({emitEvent: false});
        }
        this.phoneControl.updateValueAndValidity();
      }
    })
  }
  submitForm(e: any) {
    console.log('submit!', e);
    console.log('form value', this.formGroup.value);
    if (this.formGroup.invalid) {
      return;
    }
    let company = {
      ...this.formGroup.value as Company
     
    }
    if (this.isAdd) {
      this.companyService.addCompany(company)
    .subscribe(_ => this.router.navigateByUrl('/company/list'))
    }
    else {
      company = {
        ...company,
        id: this.companyId
      }
      this.companyService.updateCompany(company)
    .subscribe(_ => this.router.navigateByUrl('/company/list'))
    }
    
    let comp: Company = {
      id: 0,
      name: this.nameControl?.value,
      email: this.emailControl?.value,
      phone: this.phoneControl?.value
    }
    this.saveCompany.emit(comp)
  }
}
