import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserService } from 'src/app/Services/userService/user.service';

@Component({
  selector: 'app-reset-pass',
  templateUrl: './reset-pass.component.html',
  styleUrls: ['./reset-pass.component.scss']
})
export class ResetPassComponent {
  resetpassForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder, private user: UserService, private snackBar: MatSnackBar) {}

  ngOnInit (){
    this.resetpassForm = this.formBuilder.group({
      password: ['', [Validators.required, Validators.minLength((6))]],
      confirmPassword: ['', [Validators.required, Validators.minLength((6))]]
    })
  }

  get f() {return this.resetpassForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.resetpassForm.valid)
    {
      let payload = {
        password: this.resetpassForm.value.password,
        confirmPassword: this.resetpassForm.value.confirmPassword
      }
      this.user.resetPass(payload).subscribe((response: any)=>{
        console.log(response)
        console.log(response.result)

        this.snackBar.open("password changed Successfully")
      })
    }
  }
}
