import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable} from 'rxjs';
import {state} from '../model/State';
import { CompileShallowModuleMetadata } from '@angular/compiler';

@Injectable({
  providedIn: 'root'
})
export class DataserviceService {

  constructor(private http: HttpClient) { }

showData(year : string) : Observable<state[]> {
  return this.http.get<state[]>
  ("https://datausa.io/api/data?drilldowns=State&measures=Population&year="+year);
}

showUSData(year : string) : Observable<string> {
  return this.http.get<string>
  ("https://datausa.io/api/data?drilldowns=Nation&measures=Population&year="+year);
}

}


