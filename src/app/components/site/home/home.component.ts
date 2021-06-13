import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private _router: Router,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null'){
      this._router.navigate(["/index"]);
    }
  }
  
  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }

  myPhoto='./assets/IMAGE/maurya.jpg';
  
  mythology='./assets/IMAGE/mythology.jpg';
  generalknowledge='./assets/IMAGE/general knowledge.jpg';
  geography='./assets/IMAGE/geography.jpeg';
  history='./assets/IMAGE/history.jpg';
  literature='./assets/IMAGE/literature.jpg';
  movies='./assets/IMAGE/movies.jpg';
  spaceexploration='./assets/IMAGE/space exploration.jpg';
  sports='./assets/IMAGE/sports.jpg';
  technology='./assets/IMAGE/technology.jpg';
}
