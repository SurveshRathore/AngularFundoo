import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-trashnote',
  templateUrl: './trashnote.component.html',
  styleUrls: ['./trashnote.component.scss']
})
export class TrashnoteComponent {
  noteListArray:any;
  trash= true;

  constructor(private notes: NoteService ){}

  ngOnInit(){
    this.GetAllNotes()
  }

  GetAllNotes(){
    this.notes.GetAllNotes().subscribe((response:any)=>{
      console.log(response);
      this.noteListArray=response.data;
      console.log(this.noteListArray);
      
      this.noteListArray.reverse();
      console.log("retriving only trashed notes")

      this.noteListArray=this.noteListArray.filter((result:any)=>{
        return result.noteIsTrash==true && result.noteIsArchive==false;
      })
    })
  }

  receiveMessage($event:any){
    console.log("Inside trash Notes",$event);
    this.GetAllNotes();
  }
}