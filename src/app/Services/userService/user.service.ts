import { HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private httpservice: HttpService ) {}

  login(reqdata: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpservice.postService('controller/api/Login',reqdata,false,header)
  }

  register(reqdata: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpservice.postService('controller/api/Register',reqdata,false,header)
  }

  forgetPass(reqdata: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpservice.postService('controller/api/ForgetPassword', reqdata, false, header)
  }

  resetPass(reqdata: any){
    let header = {
      headers: new HttpHeaders({
        'Content-type' : 'application/json',
        //'Authorization':'token'
      })
    }
    return this.httpservice.postService('controller/api/ResetPassword', reqdata, false, header)
  }
}
