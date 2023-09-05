import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-archivenote',
  templateUrl: './archivenote.component.html',
  styleUrls: ['./archivenote.component.scss']
})
export class ArchivenoteComponent {
  noteListArray:any;

  constructor(private notes:NoteService){}

  ngOnInit(){
    this.GetArcheiveNotes()
  }

  GetArcheiveNotes(){
    this.notes.GetAllNotes().subscribe((response:any)=>{
      console.log(response);
      this.noteListArray=response.data;
      console.log(this.noteListArray);
      
      this.noteListArray.reverse();
      console.log("retriving only archived notes")

      this.noteListArray=this.noteListArray.filter((result:any)=>{
        return result.noteIsArchive==true && result.noteIsTrash == false;
      })
    })
  }

  receiveMessage($event:any){
    console.log("Inside Get archive Notes",$event);
    this.GetArcheiveNotes();
  }
}
