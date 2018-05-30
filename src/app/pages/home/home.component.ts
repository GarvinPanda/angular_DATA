import { Component, OnInit } from '@angular/core'
import { Http } from '@angular/http';
import "rxjs/Rx"
import { Observable } from 'rxjs/Rx';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http:Http) { }

  private list:Array<any>
  private httpList:Observable<any> 

  ngOnInit() {
    // let httpLiu = this.http.get("/api/list").map(res=>res.json())

    // httpLiu.subscribe((list)=>{
    //   this.list = list;
    // })
      // 优化之后的

     this.httpList =  this.http.get("/api/list").map(res=>res.json())
  }

}
