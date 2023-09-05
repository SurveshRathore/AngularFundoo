import { Component, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { UpdatenoteComponent } from '../updatenote/updatenote.component';
import { DataserviceService } from 'src/app/Services/DataService/dataservice.service';
import { IconComponent } from '../icon/icon.component';

@Component({
  selector: 'app-displaynote',
  templateUrl: './displaynote.component.html',
  styleUrls: ['./displaynote.component.scss']
})
export class DisplaynoteComponent {
  @Input() notesList:any;

  @Output() displayToGetAllNoteEvent = new EventEmitter<string>();
  @Output() updateEvent =new EventEmitter<string>();

  message : any;
  searchData: any = '';

  @Input() trashIcon: any;

  constructor(public dialog:MatDialog, private dataService:DataserviceService){}

  ngOnInit(){
    console.log('display',this.notesList);

    this.dataService.currentMessage.subscribe((response:any)=>{
      this.searchData = response;
      console.log(response);
      console.log(this.searchData);
      
    })
  }

  OpenDialogBox(notes:any){

    const dialogRef = this.dialog.open(UpdatenoteComponent, {
      data: notes,
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.displayToGetAllNoteEvent.emit(this.message);
    });

  }

  receiveMessage($event:any){
    console.log("display Notes",$event);
    this.message=$event;
    this.displayToGetAllNoteEvent.emit($event);
    this.updateEvent.emit($event);
  }
}
