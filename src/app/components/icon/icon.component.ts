import { Component, EventEmitter, Input, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-icon',
  templateUrl: './icon.component.html',
  styleUrls: ['./icon.component.scss']
})
export class IconComponent {
  archive = false;
  
  @Input() trashIcons: any;
  // trash = this.trashIcons;
  @Input() noteId: any;

  
  @Output() iconEvent = new EventEmitter<string>();

  Colours: Array<any> = [
    { code:'#ffffff', name: 'white' },
    { code:'#f28b82', name: 'red' },
    { code:'#fbbc04', name: 'orange' },
    { code:'#FFFF00', name: 'yellow' },
    { code:'#ccff90', name: 'green' },
    { code:'#a7ffeb', name: 'teal' },
    { code:'#cbf0f8', name: 'blue' },
    { code:'#aecbfa', name: 'darkblue' },
    { code:'#d7aefb', name: 'purple' },
    { code:'#fdcfe8', name: 'pink' },
    { code:'#e6c9a8', name: 'brown' },
    { code:'#e8eaed', name: 'grey' },
    { code:'#00ffff', name: 'aqua' },
    { code:'#adff2f', name: 'greenyellow' },
    { code:'#c0c0c0', name: 'silver' },
    { code:'#ff00ff', name: 'magenta' },

  ]
  
  ngOnInit(){
    // console.log(this.noteId);
    
  }
  
  constructor(private note: NoteService, private snackbar: MatSnackBar){}

  archiveNote(){
    let payload = {
      NoteId: [this.noteId.noteId]  
    }
   
    this.note.archeiveNote(payload).subscribe((response:any)=>{
      console.log(response);
      this.iconEvent.emit(response)
      
    })
    this.snackbar.open("Note Archieved successfully", '', {duration: 2000})
  }

  unarchiveNote(){
    let payload = {
      NoteId: [this.noteId.noteId]  
    }
   
    this.note.archeiveNote(payload).subscribe((response:any)=>{
      console.log(response);
      this.iconEvent.emit(response)
      
    })
    this.snackbar.open("Note unarchieved successfully", '', {duration: 2000})
  }

  trashNote(){
    let payload = {
      NoteId: [this.noteId.noteId]
    }

    this.note.trashNote(payload).subscribe((response:any)=>{
      console.log(response);
      this.iconEvent.emit(response);
    })
    this.snackbar.open("Note moved to trash", '', {duration: 2000})
  }

  untrashNote(){
    let payload = {
      NoteId: [this.noteId.noteId]
    }

    this.note.trashNote(payload).subscribe((response:any)=>{
      console.log(response);
      this.iconEvent.emit(response);
    })
    this.snackbar.open("Note Restore succesfully", '', {duration: 2000})
  }

  setColor(colour:any){
    let payload = {
      NoteId: [this.noteId.noteId],
      color: colour.name,
    }
    this.note.updateColor(payload).subscribe((response:any)=>{
      console.log(response);
      this.iconEvent.emit(response);
    })

  }

  toggleIcon(){

  }
}
