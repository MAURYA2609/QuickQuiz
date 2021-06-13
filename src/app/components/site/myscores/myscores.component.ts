import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';
import { UserService } from 'src/app/user.service';

@Component({
  selector: 'app-myscores',
  templateUrl: './myscores.component.html',
  styleUrls: ['./myscores.component.css']
})
export class MyscoresComponent implements OnInit {
  public scores: any=[];

  constructor(private _router: Router,
    public cookieservice: CookieService,
    public _userService:UserService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null'){
      this._router.navigate(["/index"]);
    }

    this._userService.myScores(this.cookieservice.get('username'))
    .subscribe(
      data=>{this.scores=data['myScores']}
    )
  }
  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
  
}
