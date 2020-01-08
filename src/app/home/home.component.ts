import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ServeService } from '../services/serve.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  title = 'angular-weather-app';
  showmap: boolean = false;
  res;
  private  appid = "appid=8e1880f460a20463565be25bc573bdc6";
  public response
  loading = false;
  load1 = true
  constructor(
    private http: HttpClient, private _serve:ServeService
  ){}
  ngOnInit(){
    this._serve.getPosition().then(pos=> {
        this.getWeather(pos)
      });
  }
  getWeather(event){
    this.loading = true
       let url1 = `http://api.openweathermap.org/data/2.5/weather?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
       let url2 = `http://api.openweathermap.org/data/2.5/forecast?lat=${event.lat}&lon=${event.lng}&${this.appid}`;
    let url3 =url1
    this.http.get(url1).toPromise()
      .then(current =>{
        this.http.get(url2).toPromise()
          .then(day =>{
                  this.response = {current:current,days:day}   
                  console.log(this.response);
                   
                  this.showmap = false  
                  this.loading = false;
                  this.load1 = false  
          })
          .catch(err =>{
            console.log("error");       
          })  
      })
      .catch(err =>{
        console.log("error");       
      })
  }
}