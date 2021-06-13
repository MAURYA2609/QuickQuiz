import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  private baseUri: string = "http://localhost:4000";
  private headers = new HttpHeaders().set('Content-Type', 'application/json');
  constructor(private http: HttpClient, private _router: Router) { }
  register(body: any) {
    return this.http.post('http://127.0.0.1:4000/users/signup', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  login(body: any) {
    return this.http.post('http://127.0.0.1:4000/users/index', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  addQuestion(body: any,correct:string,category:string) {
    return this.http.post('http://127.0.0.1:4000/questions/adminhome/'+correct+'/'+category, body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  questionList() {
    return this.http.post('http://127.0.0.1:4000/questions/questionList',  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  quizQuestions(category:string) {
    return this.http.post('http://127.0.0.1:4000/questions/quizQuestions/'+category,  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  addScore(username:string,score:number,category:string){
    return this.http.post('http://127.0.0.1:4000/scores/newScore/'+username+'/'+score+'/'+category ,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  allScores() {
    return this.http.post('http://127.0.0.1:4000/scores/allScores',  {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }

  myScores(username:string){
    return this.http.post('http://127.0.0.1:4000/scores/myScores/'+username ,{
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    }); 
  }
}