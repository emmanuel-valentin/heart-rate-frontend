import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment';
import { map, Observable } from 'rxjs';
import { Record } from '../interfaces/record.interface';

@Injectable({
  providedIn: 'root',
})
export class RecordService {
  private apiUrl = environment.apiUrl;
  constructor(private readonly http: HttpClient) {}

  findAll(): Observable<Record[]> {
    return this.http.get<Record[]>(`${this.apiUrl}/records`);
  }
}
