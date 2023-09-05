import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatSidenavModule} from '@angular/material/sidenav';
import { HttpClientModule } from '@angular/common/http';
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, Component, OnDestroy} from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {NgIf, NgFor} from '@angular/common';
import {MatMenuModule} from '@angular/material/menu';
import { MatDialogModule } from '@angular/material/dialog';
import {MatCardModule} from '@angular/material/card';

import { AuthguardServiceService } from './Services/authguard/authguard-service.service';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './components/registration/registration.component';
import { LoginComponent } from './components/login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForgetPassComponent } from './components/forget-pass/forget-pass.component';
import { ResetPassComponent } from './components/reset-pass/reset-pass.component';
import { InputBoxComponent } from './demo/input-box/input-box.component';
import {DashboardComponent} from './components/dashboard/dashboard.component';
import { TakeNoteComponent } from './components/take-note/take-note.component';
import { IconComponent } from './components/icon/icon.component';
import { GetnotesComponent } from './components/getnotes/getnotes.component';
import { DisplaynoteComponent } from './components/displaynote/displaynote.component';
import { TrashnoteComponent } from './components/trashnote/trashnote.component';
import { ArchivenoteComponent } from './components/archivenote/archivenote.component';
import { UpdatenoteComponent } from './components/updatenote/updatenote.component';
import { FilterPipePipe } from './Pipes/filter-pipe.pipe';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    LoginComponent,
    ForgetPassComponent,
    ResetPassComponent,
    InputBoxComponent,
    DashboardComponent,
    TakeNoteComponent,
    IconComponent,
    GetnotesComponent,
    DisplaynoteComponent,
    TrashnoteComponent,
    ArchivenoteComponent,
    UpdatenoteComponent,
    FilterPipePipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    FormsModule,
    MatToolbarModule,
    MatIconModule, 
    MatSnackBarModule,
    MatSidenavModule,
    HttpClientModule,
    MatListModule, NgIf, NgFor,
    MatMenuModule,
    MatDialogModule,
    MatCardModule
  ],
  providers: [
    AuthguardServiceService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
