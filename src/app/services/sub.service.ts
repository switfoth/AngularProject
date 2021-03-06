import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Sub } from '../Sub'

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json',
  }),
};

@Injectable({
  providedIn: 'root'
})

export class SubService {
  private apiUrl = 'http://localhost:5000/subs'

  constructor(private http:HttpClient) { }

  getSubs(): Observable<Sub[]> {
    return this.http.get<Sub[]>(this.apiUrl)
  }

  deleteSub(sub: Sub): Observable<Sub> {
    const url = `${this.apiUrl}/${sub.id}`;
    return this.http.delete<Sub>(url);
  }

  addSub(sub: Sub): Observable<Sub> {
    return this.http.post<Sub>(this.apiUrl, sub, httpOptions)
  }
}
