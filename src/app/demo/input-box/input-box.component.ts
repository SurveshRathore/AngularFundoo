import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-box',
  templateUrl: './input-box.component.html',
  styleUrls: ['./input-box.component.scss']
})
export class InputBoxComponent {
  inputPage!: FormGroup;

  constructor(private formBuider: FormBuilder) {}

  ngOnInit(){
    this.inputPage = this.formBuider.group({
      userInput: ['', Validators.required]
    })
  }

  get f() {return this.inputPage.controls}

  onSubmit(){
    console.log(this.inputPage.value)
  }
}
