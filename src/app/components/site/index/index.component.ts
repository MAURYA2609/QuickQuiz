import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/user.service';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';


@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css']
})
export class IndexComponent implements OnInit {

  loginForm:FormGroup = new FormGroup({
    username : new FormControl(null,Validators.required),
    password : new FormControl(null,Validators.required)
  })

  public msg: any = [];
  public avail: boolean;

  constructor(private _router: Router, 
    private _userService: UserService,
    public cookieservice: CookieService) { }
  
  ngOnInit(): void {
  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }

  login() {

    if(this.loginForm.controls.username.value == "user10702" && this.loginForm.controls.password.value == "user10702"){
      this.cookieservice.set("username",this.loginForm.controls.username.value);
      this._router.navigate(['/adminhome']);
    }
    else{

      if(!this.loginForm.valid)
      {
        console.log('invalid');
        this.msg = "please,fill valid inputs";
        this.avail = true
        return;
      }
      this._userService.login(JSON.stringify(this.loginForm.value))
        .subscribe(
          data => {
            console.log(data);
            console.log(data['msg']);
            if (data['msg'] == 'Login successfull') {
              localStorage.setItem('token', data['token']);
              this.cookieservice.set("username",this.loginForm.controls.username.value);
              this._router.navigate(['/home']);
            }
            else {
            this.msg = data['msg'];
              this.avail = true;
              return;
            }
          },
          error => { console.error(error) }
        )
      }
  }
}