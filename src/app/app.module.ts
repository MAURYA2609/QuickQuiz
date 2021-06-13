import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';
import { AdminhomeComponent } from './components/site/adminhome/adminhome.component';
import { AdminloginComponent } from './components/site/adminlogin/adminlogin.component';
import { AllscoresComponent } from './components/site/allscores/allscores.component';
import { ChangeinfoComponent } from './components/site/changeinfo/changeinfo.component';
import { EditprofileComponent } from './components/site/editprofile/editprofile.component';
import { HighscoresComponent } from './components/site/highscores/highscores.component';
import { HomeComponent } from './components/site/home/home.component';
import { IndexComponent } from './components/site/index/index.component';
import { MyscoresComponent } from './components/site/myscores/myscores.component';
import { PlayquizComponent } from './components/site/playquiz/playquiz.component';
import { QuestionlistComponent } from './components/site/questionlist/questionlist.component';
import { ResetComponent } from './components/site/reset/reset.component';
import { SignupComponent } from './components/site/signup/signup.component';


import { RouterModule,Routes } from '@angular/Router';
import { HttpClientModule } from '@angular/common/http';
import { UserService } from './user.service';
import { CommonModule } from '@angular/common';

const appRoutes: Routes = [
  { path: '', component: IndexComponent } ,
  { path: 'adminhome', component: AdminhomeComponent } ,
  { path: 'adminlogin', component: AdminloginComponent },
  { path: 'allscores', component: AllscoresComponent },
  { path: 'changeinfo', component: ChangeinfoComponent },
  { path: 'editprofile', component: EditprofileComponent },
  { path: 'highscores', component: HighscoresComponent },
  { path: 'home', component: HomeComponent },
  { path: 'index', component: IndexComponent },
  { path: 'myscores', component: MyscoresComponent },
  { path: 'playquiz/:category', component: PlayquizComponent },
  { path: 'questionlist', component: QuestionlistComponent },
  { path: 'reset', component: ResetComponent },
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    AdminhomeComponent,
    AdminloginComponent,
    AllscoresComponent,
    ChangeinfoComponent,
    EditprofileComponent,
    HighscoresComponent,
    HomeComponent,
    IndexComponent,
    MyscoresComponent,
    PlayquizComponent,
    QuestionlistComponent,
    ResetComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }


