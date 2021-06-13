import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-adminhome',
  templateUrl: './adminhome.component.html',
  styleUrls: ['./adminhome.component.css']
})
export class AdminhomeComponent implements OnInit {

  public category:string;
  public correct:string;

  questionForm:FormGroup = new FormGroup({
    question:new FormControl(null,Validators.required),
    optionA:new FormControl(null,Validators.required),
    optionB:new FormControl(null,Validators.required),
    optionC:new FormControl(null,Validators.required),
    optionD:new FormControl(null,Validators.required)
  })

  constructor(
    private _router: Router, 
    private _userService: UserService,
    private cookieservice:CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") != 'user10702'){
      this._router.navigate(["/index"]);
    }
    
  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }

  addQuestion(){
    console.log(this.questionForm.value);
    this._userService.addQuestion(JSON.stringify(this.questionForm.value),this.correct,this.category)
      .subscribe(
        data => {
          console.log(data);
          localStorage.setItem('token', data['token']);
          this._router.navigate(['/adminhome']);
        },
        error => { console.error(error) }
      )
      this._router.navigate(['/adminhome']);
  }
}
