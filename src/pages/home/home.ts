import { Component } from '@angular/core';


import { Http, Headers, Response, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import {HttpClient} from '@angular/common/http';

class ItemsResponse {
lastname: string;
firstname: string;
}

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  styles: [
    `body {
      background-color: #FFFFFF;
    }`,

    `.ui.menu .item img.logo {
      margin-right: 1.5em;
    }`,

    `.main.container {
      margin-top: 7em;
    }`,

    ` .wireframe {
      margin-top: 2em;
    }`,

    `.ui.footer.segment {
      margin: 5em 0em 0em;
      padding: 5em 0em;`,

    `#sign{
        position: absolute;
        top: 8px;
        right: 16px;
        font-size: 18px;
        }`,

    `#menu{
        position: absolute;
        top: 0px;
        left: 0px;
        font-size: 18px;
        }`,

    `/deep/ page-home div.scroll-content{
        padding-top: 0px !important;
      }`,
  ]
})
export class HomePage {
  results: ItemsResponse;


  // constructor(public http: Http) { }
    constructor(private http: HttpClient) {}





  getDikla() {

// this.http.get('http://34.251.173.40:8000/example/')
//        .subscribe(data => { this.results = data; },
//        err => { console.log("Oops!"); });
  //    this.http.get('http://34.251.173.40:8000/api/')
  //      .map((res: Response) => { return res.json():P })
  //      .subscribe(data => { this.diklaString = data['_body']; }
  //      , err => { console.log('Oops!'); });
  //  }
// this.http.get('http://34.251.173.40:8000/example/')
//        .map(res => res.json())
//        .subscribe(data => { this.diklaString = data; },
//        err => { console.log('Oops!'); });

  // goToSignUp(){
  //   this.nav.push(SignUpPage)

  //}

  // this.http.get('http://34.251.173.40:8000/example/').subscribe(data => {
  //     // Read the result field from the JSON response.
  //     this.results = data['results'];
  //   });

    this.http.get<ItemsResponse>('http://34.251.173.40:8000/example/').subscribe(data => {
  // data is now an instance of type ItemsResponse, so you can do this:
  this.results = data;
});

// this.http
//   .get<ItemsResponse>('http://34.251.173.40:8000/example/', {observe: 'response'})
//   .subscribe(resp => {
//     // Here, resp is of type HttpResponse<MyJsonData>.
//     // You can inspect its headers:
//     console.log(resp.headers.get('X-Custom-Header'));
//     // And access the body directly, which is typed as MyJsonData as requested.
//     console.log(resp.body.results);
//   });
  }
}
