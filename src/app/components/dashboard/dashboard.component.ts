import { Component } from '@angular/core';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';
import { Route, Router } from '@angular/router';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataserviceService } from 'src/app/Services/DataService/dataservice.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnDestroy {

  listView = false;

  mobileQuery: MediaQueryList;

  private _mobileQueryListener: () => void;

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher, private route:Router, private popup:MatSnackBar,
    private dataService:DataserviceService) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
  }

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }

  shouldRun = /(^|.)(stackblitz|webcontainer).(io|com)$/.test(window.location.host);

  logOut(){
    console.log("logged out")
    localStorage.removeItem('token')
    this.route.navigateByUrl("/")
    this.popup.open('Logout')
  }

  // navigateToArchive(){
  //   this.route.navigateByUrl("/")
  // }

  searchNote(event:any){
    console.log('event.target.value',event.target.value);
    
    this.dataService.sendMessage(event.target.value);

  }

  toggleNotesView(){
    this.listView = !this.listView;
    console.log("toggleNotesView",this.listView);
    
  }
}
