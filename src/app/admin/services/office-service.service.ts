import { Injectable } from '@angular/core';
import { api } from '../../connection';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OfficeServiceService {

  constructor(private http: HttpClient) {}

  getOfficeServices() {
    return this.http.get(`${api}/Service`);
  }
}
