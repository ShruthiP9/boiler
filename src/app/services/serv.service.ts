import { Example } from '../example';
import { Injectable } from '@angular/core';
import {Http, Response} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';


@Injectable()
export class ServService {
xyz: Example[];
  constructor(private http: Http) { }
getPosts(): Observable<Example[]> {
  return this.http.get('assets/inputs.json').map((response: Response) => response.json());
}
}
