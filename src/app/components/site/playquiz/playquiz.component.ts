import { Component, OnInit } from '@angular/core';
import { Router,ParamMap,ActivatedRoute} from '@angular/router';
import { UserService } from 'src/app/user.service';
import {CookieService} from 'ngx-cookie-service';

@Component({
  selector: 'app-playquiz',
  templateUrl: './playquiz.component.html',
  styleUrls: ['./playquiz.component.css']
})
export class PlayquizComponent implements OnInit {


  public questions : any=[];
  private category:string;
  public answers : any=[];
  public score : number=0;
  public avail : boolean =false;

  constructor(private _router: Router,
    private route:ActivatedRoute,
    private _userService: UserService,
    public cookieservice: CookieService) { }

  ngOnInit(): void {
    if(this.cookieservice.get("username") == 'null' ){
      this._router.navigate(["/index"]);
    }

    this.route.paramMap.subscribe(
      params => { this.category = params.get('category'); }
    );

    this._userService.quizQuestions(this.category)
    .subscribe(
      data=>{this.questions=data['quizquestions']}
    )
  }

  logout(){
    this.cookieservice.set("username",null);
    this._router.navigate(['/index']);
  }
  

  getScore(){
    this.score=0;
    for(let i=0;i<this.questions.length;i++)
    {
      if(this.answers[i]==this.questions[i].correct)
      {
        this.score=this.score+1;
      }
    }
    console.log(this.score);
    this.avail=true;

    this._userService.addScore(this.cookieservice.get("username"),this.score,this.category)
    .subscribe(
      data => console.log(data) ,
      error => console.error(error)
    )

  }
}
