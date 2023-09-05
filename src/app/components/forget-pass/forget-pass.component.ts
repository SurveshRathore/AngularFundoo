import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-forget-pass',
  templateUrl: './forget-pass.component.html',
  styleUrls: ['./forget-pass.component.scss']
})
export class ForgetPassComponent {
  forgetpassForm!: FormGroup;
  submitted = false;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(){
    this.forgetpassForm = this.formBuilder.group({
      userName: ['', [Validators.required, Validators.email]],
    })
    
  }

  get f(){return this.forgetpassForm.controls;}

  onSubmit(){
    this.submitted = true;

    if(this.forgetpassForm.invalid)
    {
      return
    }
  }
}
