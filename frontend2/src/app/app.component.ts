import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { user } from './users/user';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'frontend';
  selectedPanel :String = "users";
  users : user[] =[];
  constructor(private http:HttpClient){

  }
  ngOnInit(): void {
      this.http.get<user[]>("http://127.0.0.1:8080/user").subscribe(result => {
        result = result.filter((val)=>{
          return val.age<21 ? true : false;
        })
        this.users = result
    })
  }
  onChangePannel(pannel : String){
    this.selectedPanel = pannel;
    if(pannel=="users"){
      this.http.get<user[]>("http://127.0.0.1:8080/user").subscribe(result => {
        result = result.filter((val)=>{
          return val.age<21 ? true : false;
        })
        // console.log(result)
        this.users = result
      }) 
    }else if(pannel=="winners"){
      this.http.get<user[]>("http://127.0.0.1:8080/winner").subscribe(result => {
        this.users = result
      }) 
    }else{
      this.http.get<user[]>("http://127.0.0.1:8080/user").subscribe(result => {
        result = result.filter((val)=>{
          return val.score>90 ? true : false;
        })
        this.users = result
      }) 
    }
  }
  userToWinner(user : user){
    // this.http.delete("http://127.0.0.1:8080/user",{
    //   body:{
    //     key:user.key
    //   }
    // }).subscribe((response)=>{
    //   console.log(response);
    // })
    this.http.post("http://127.0.0.1:8080/winner",{
      name:user.name,
      age:user.age,
      score:user.score
    }).subscribe((response)=>{
      console.log(response);
    })
  }

}
