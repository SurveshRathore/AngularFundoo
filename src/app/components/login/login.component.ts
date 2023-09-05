import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  loginForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar, private route: Router) {}

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength((6))]]
    })
  }

  get f() {return this.loginForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.loginForm.valid)
    {
      let payload = {
        emailId: this.loginForm.value.userName,
        password: this.loginForm.value.password
      }
      this.user.login(payload).subscribe((response: any)=>{
        console.log(response)
        console.log(response.result)
        localStorage.setItem('token', response.result)

        this.snackBar.open("Login Successfully", '',{duration: 2000})
        
        this.route.navigateByUrl("/dashboard/getnote");
        
      })
    }
  }
}
