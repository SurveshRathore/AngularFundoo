import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthguardServiceService {

  constructor() { }

  gettoken(){
    return !!localStorage.getItem("token");
  }
}
