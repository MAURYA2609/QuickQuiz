import { Component, OnInit } from '@angular/core';
import { FormGroup,Validators,FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from 'src/app/user.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {

  public msg: any = [];
  public avail: boolean;

  signupForm:FormGroup = new FormGroup({
    username:new FormControl(null,Validators.required),
    email:new FormControl(null,[Validators.email,Validators.required]),
    password:new FormControl(null,Validators.required),
    repassword:new FormControl(null,Validators.required)
  })

  constructor(private _router: Router, 
    private _userService: UserService,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
  
  }

  register(){
    if (!this.signupForm.valid) {
      console.log("Invalid registration inputs");
      this.msg = "please,fill valid inputs";
      this.avail = true
      return;
    }
   if (this.signupForm.controls.password.value != this.signupForm.controls.repassword.value) {
      console.log("Password and confirm password does not match");
      this.msg = "Password and confirm password does not match";
      this.avail = true
      return; 
    }
    this._userService.register(JSON.stringify(this.signupForm.value))
      .subscribe(
        data => {
          console.log(data);
          // localStorage.setItem('token',data['token']);
          this.cookieservice.set("username",this.signupForm.controls.username.value);
          this._router.navigate(['/home']);
        },
        error => console.error(error)
      )
  }  
}