import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-questionlist',
  templateUrl: './questionlist.component.html',
  styleUrls: ['./questionlist.component.css']
})
export class QuestionlistComponent implements OnInit {
  public ALLquestions: any=[];

  constructor(private _router: Router,
    private _userService: UserService,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
    
    console.log(this.cookieservice.get("username"));
    if(this.cookieservice.get("username") == 'null' ){
      console.log("the value is null");
      this._router.navigate(["/index"]);
    }

    this._userService.questionList()
    .subscribe(
      data=>{this.ALLquestions=data['ALLquestions']}
    )
  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
  
}
