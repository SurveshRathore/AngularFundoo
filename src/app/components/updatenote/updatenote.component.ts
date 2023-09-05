import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from 'src/app/Services/noteService/note.service';

@Component({
  selector: 'app-updatenote',
  templateUrl: './updatenote.component.html',
  styleUrls: ['./updatenote.component.scss']
})
export class UpdatenoteComponent {
  title: any;
  desc: any;
  id: any;
  color: any;

  constructor(
    private note: NoteService,
    private snackBar: MatSnackBar,
    public dialogRef: MatDialogRef<UpdatenoteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
  ) {
    console.log(data);
    this.title = this.data.noteTitle;
    this.desc = this.data.noteDesciption;
    this.id = this.data.noteId;
    this.color = this.data.noteColor;

  }

  CloseDialogBox() {
    let payload = {
      noteTitle: this.title,
      noteDesciption: this.desc,
      NoteId: this.id
      
      
    }
    console.log(payload.NoteId);
    
    this.note.updateNote(payload).subscribe((response:any)=>{
      console.log("notes updated", response);
      this.snackBar.open("Note updated succesfully", '', {duration:2000});
    })
    this.dialogRef.close();
  }
}
