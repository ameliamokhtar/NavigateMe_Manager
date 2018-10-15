import { Injectable } from '@angular/core';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, Response, Headers, HttpModule, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class Service {

  constructor(private http: Http, private router: Router) { }
  url = "http://localhost/backend";
  headers = new Headers();
 
  public login(data) {
    let url = '{url}/login.php'
      .replace(/\{url\}/g, this.url)
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
    let params = "email=" + data.email + "&password=" + data.password;
    return this.http.post(url, params,options).map((res) => {
      return res.json();
    });
  }

  public getStaff(){
    let url = '{url}/getStaff.php'
      .replace(/\{url\}/g, this.url)
    return this.http.get(url).map((res:Response) => 
    {
      return res.json();
    });
  }


  public getStudent(){
    let url = '{url}/getStudent.php'
      .replace(/\{url\}/g, this.url)
    return this.http.get(url).map((res:Response) => 
    {
      return res.json();
    });
  }

  public addStaff(data) {
    let url = '{url}/editStaff.php'
      .replace(/\{url\}/g, this.url)
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
    return this.http.post(url, data,options).map((res) => {
      return res.json();
    });
  }

  public addStudent(data) {
    let url = '{url}/editStudent.php'
      .replace(/\{url\}/g, this.url)
      let headers = new Headers({ 'Content-Type': 'application/x-www-form-urlencoded' });
      let options = new RequestOptions({ headers: headers });
    return this.http.post(url, data,options).map((res) => {
      return res.json();
    });
  }
  
}
