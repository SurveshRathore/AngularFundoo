import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-take-note',
  templateUrl: './take-note.component.html',
  styleUrls: ['./take-note.component.scss']
})
export class TakeNoteComponent {
  show = false;
  ImgOne = true;
  ImgTwo = false;
  

  @Output() createEvent=new EventEmitter<string>();

  hideAndShow() {
    this.show = !this.show;
    this.ImgOne = false;
    this.ImgTwo = true;
  }

  token: any;
  takenote!: FormGroup;
  submitted = false;
  constructor(private formBuilder: FormBuilder, private activeRoute: ActivatedRoute, private note:NoteService) { }

  ngOnInit(){
    this.takenote = this.formBuilder.group({
      title: ['', Validators.required],
      note: ['', Validators.required]
    })
  }

  get f() {return this.takenote.controls;}


  OnSubmit(){
    this.show = !this.show;
    this.submitted = true;
    this.ImgOne = true;
    this.ImgTwo = false;

    if(this.takenote.valid) {
      let payload = {
        noteTitle: this.takenote.value.title,
        noteDesciption: this.takenote.value.note
      }
       this.note.AddNotes(payload).subscribe((response:any)=>{
        console.log(response)
        this.createEvent.emit(response);
       })

       this.takenote = this.formBuilder.group({
        title: [''],
        note: [''],

        
      })
    }
  }
}
