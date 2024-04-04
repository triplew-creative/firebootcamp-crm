import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Observable } from 'rxjs';
import { Company } from '../company.model';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'fbc-company-table',
  templateUrl: './company-table.component.html',
  styleUrl: './company-table.component.scss',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CompanyTableComponent {
  @Input() companies$!: Observable<Company[]>;
  @Input() searchControl?: FormControl;
  @Output() deleted = new EventEmitter<Company>();
  constructor(){}

  deleteCompany(item: Company) {
    this.deleted.emit(item);
  }
}
