import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }

  getEmployee(email: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee?email=${email}`);
  }

  createEmployee(employee: Object): Observable<Object> {
    return this.http.post(`${this.baseUrl}/employee`,employee);
  }

  updateEmployee(email: string, value: any): Observable<Object> {
    return this.http.put(`${this.baseUrl}/employee?email=${email}`, value);
  }

  deleteEmployee(email: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/employee?email=${email}`, { responseType: 'text' });
  }

  getEmployeesList(): Observable<any> {
    return this.http.get(`${this.baseUrl}/employee-list`);
  }
}