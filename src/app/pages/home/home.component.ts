import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http';
import "rxjs/Rx"
import { Observable } from 'rxjs/Rx';
import {  GetdataService} from 'app/service/getdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private gd:GetdataService) { }

  private httpList:Observable<any>
  private httpBanner:Observable<any>

  ngOnInit() {
    // let httpLiu = this.http.get("/api/list").map(res=>res.json())

    // httpLiu.subscribe((list)=>{
    //   this.list = list;
    // })
      // 优化之后的

    //  this.httpList =  this.http.get("/api/list").map(res=>res.json())
    this.httpList = this.gd.getList()
    this.httpBanner = this.gd.getBanner()
  }

}
