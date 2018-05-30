import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import "rxjs/Rx"
import { LIST_URL, BANNER_URL } from '../base/urldata';

@Injectable()
export class GetdataService {
  constructor( private http:Http) { }
  getList(){
    return this.http.get(LIST_URL).map(res=>res.json())
  }

  getBanner(){
    return this.http.get(BANNER_URL).map(res=>res.json())
  }

}
