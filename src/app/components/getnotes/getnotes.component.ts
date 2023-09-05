import { Component } from '@angular/core';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-getnotes',
  templateUrl: './getnotes.component.html',
  styleUrls: ['./getnotes.component.scss']
})
export class GetnotesComponent {
  AllNotes: any = [];
  NotesArray: any;

  token: any;

  constructor(private note:NoteService){}
  ngOnInit(){
    this.getNotes()
  }
  getNotes(){
    this.note.GetAllNotes().subscribe((response:any)=>{
      console.log(response);
      console.log('response.data',response.data);
      //console.log('response.data.noteTitle',response.data.noteTitle);
      this.NotesArray=response.data;
      
      this.NotesArray= this.NotesArray.filter((response:any)=>{
        return response.noteIsArchive==false && response.noteIsTrash == false;
      })
      
    })
  }

  receiveMessage($event:any){
    this.getNotes();
  }

}
