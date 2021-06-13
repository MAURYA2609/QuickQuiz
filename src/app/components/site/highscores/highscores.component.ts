import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { UserService } from 'src/app/user.service';


@Component({
  selector: 'app-highscores',
  templateUrl: './highscores.component.html',
  styleUrls: ['./highscores.component.css']
})
export class HighscoresComponent implements OnInit {

  public scores:any=[];

  constructor(private _router: Router,
    public cookieservice: CookieService,
    public _userService:UserService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null'){
      this._router.navigate(["/index"]);
    }
    this._userService.allScores()
    .subscribe(
      data=>{this.scores=data['allScores']}
    )
  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }

}
