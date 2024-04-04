import { Injectable } from '@angular/core';
import { Company } from './company.model';
import { BehaviorSubject, Observable, catchError, map, of, shareReplay, tap } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  companySub: BehaviorSubject<Company[]> = new BehaviorSubject([] as Company[]);
  company$: Observable<Company[]> = this.companySub.asObservable();
  private API_BASE = 'https://app-fbc-crm-api-prod.azurewebsites.net/api';
  constructor(private http: HttpClient) {
    this.loadCompanies();
   }

  private loadCompanies() {
    this.http.get<Company[]>(`${this.API_BASE}/company`).pipe(
      map(c => c),
      catchError(this.errorHandler)
    ).subscribe(c => this.companySub.next(c as Company[]))
    // let companies:Company[] = [
    //   {name: 'Google', email: 'google@email.com', phone: '123456'},
    //   {name: 'Netflix', email: 'netflix@email.com', phone: '123456'},
    //   {name: 'Binge', email: 'binge@email.com', phone: '123456'},
    //   {name: 'Bing', email: 'bing@email.com', phone: '123456'},
    // ]
    // this.companySub.next(companies);
    // return this.company$;

  }

  getCompanies():Observable<Company[]> {
    return this.company$;
  }

  search(searchText: string): Observable<Company[]> {
    let query = '';
    if (searchText) {
      query = `?search=${searchText}`;
    }
    return this.http.get<Company[]>(`${this.API_BASE}/company${query}`).pipe(
      catchError(this.errorHandler<Company[]>)
    )
    // let companies:Company[] = [
    //   {name: 'Google', email: 'google@email.com', phone: '123456'},
    //   {name: 'Netflix', email: 'netflix@email.com', phone: '123456'},
    //   {name: 'Binge', email: 'binge@email.com', phone: '123456'},
    //   {name: 'Bing', email: 'bing@email.com', phone: '123456'},
    // ]
    // this.companySub.next(companies);
    // return this.company$;

  }
  errorHandler<T>(error: Error): Observable<T> {
    console.error(error);
    return new Observable<T>;
  }

  addCompany(item: Company):Observable<Company> {
    return this.http.post<Company>(`${this.API_BASE}/company`, item).pipe(
      catchError(this.errorHandler<Company>),
      tap(_ => this.loadCompanies())
    )
  }

  getCompany(id: number):Observable<Company> {
    return this.http.get<Company>(`${this.API_BASE}/company/${id}`).pipe(
      catchError(this.errorHandler<Company>),
      tap(_ => this.loadCompanies())
    )
  }

  updateCompany(item: Company) {
    this.companySub.next([
      ...this.companySub.getValue(),
      item
    ]);
    return this.http.put<Company>(`${this.API_BASE}/company/${item.id}`, item).pipe(
      catchError(this.errorHandler<Company>),
      tap({next: (_) => this.loadCompanies()})
    )
  }
  deleteCompany(id: number): Observable<Company> {
    return this.http.delete<Company>(`${this.API_BASE}/company/${id}`).pipe(
      catchError(this.errorHandler<Company>),
      tap(_ => this.loadCompanies())
    )
  }
}
