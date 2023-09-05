import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  registrationForm! : FormGroup;
  submitted = false;
  
  constructor(private formBuilder: FormBuilder, private user: UserService, private snackbar: MatSnackBar) {}

  ngOnInit(){
    this.registrationForm = this.formBuilder.group({
      firstName: ['', [Validators.required, Validators.minLength(3)]],
      lastName: ['', [Validators.required, Validators.minLength(3)]],
      userName: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required, Validators.minLength(6)]],
      confirmPassword: ['', Validators.required],
    })
  }

  get f() {return this.registrationForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.registrationForm.valid)
    {
      let payload = {
        firstName: this.registrationForm.value.firstName,
        lastName: this.registrationForm.value.lastName,
        emailId: this.registrationForm.value.userName,
        password: this.registrationForm.value.password,
      }
      this.user.register(payload).subscribe((response: any)=>{
        console.log(response)

        this.snackbar.open("User Register Successfully")
        
        // openSnackBar(){
          
        // }
      })
    }
  }
}
