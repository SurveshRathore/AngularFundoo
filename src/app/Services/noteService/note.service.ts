import { Injectable } from '@angular/core';
import { HttpService } from '../httpService/http.service';
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class NoteService {
  token: any;
  constructor(private httpService: HttpService ) {
    this.token = localStorage.getItem('token')
  }

  AddNotes(reqData: any)
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.postService('Note/AddNewNotes',reqData, true, header);
  }

  GetAllNotes()
  {
    let header = {
      headers: new HttpHeaders({
        'Content-type':'application/json',
        'Authorization':'Bearer '+this.token
      })
    }
    return this.httpService.getService('Note/GetAllNotes', true, header)
  }

  archeiveNote(reqData: any)
  {
     console.log('reqdata',reqData.NoteId);
    
    let header = {
      headers: new HttpHeaders({
        'Content-type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.putService('Note/IsArchive?NoteId='+reqData.NoteId, reqData, true, header);
  }

  trashNote(reqData: any)
  {
    console.log('trashnote id',reqData.NoteId);

    let header = {
      headers: new HttpHeaders({
        'Content-type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
    }
    return this.httpService.putService('Note/IsTrash?NoteId='+reqData.NoteId, reqData, true, header);
  }

  updateNote(reqData:any){

    let header = {
      headers: new HttpHeaders({
        'Content-type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
      
    }
    return this.httpService.putService('Note/UpdateNotes?NoteId='+reqData.NoteId, reqData, true, header);
  }

  updateColor(reqData:any){
    let header = {
      headers: new HttpHeaders({
        'Content-type':'Application/json',
        'Authorization':'Bearer '+ this.token
      })
      
    }

    return  this.httpService.putService('Note/updateColor?NoteId='+reqData.NoteId+'&color='+reqData.color,reqData,true,header);
  }
}
