import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable, of } from 'rxjs';
import {Sub} from '../Sub'
import {SUBS} from '../mock-subs'

@Injectable({
  providedIn: 'root'
})

export class SubService {

  constructor() { }

  getSubs(): Observable<Sub[]> {
    const subs = of(SUBS);
    return subs;
  }
}
