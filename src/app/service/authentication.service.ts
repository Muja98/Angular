import { Injectable } from '@angular/core';
import URL from '../../apis/api'
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(private http:HttpClient){}

   login(email,password) 
  {
      let data = {
          "email": email,
          "password": password
      }

      this.http.post(URL+'/login', data).subscribe(
          response=>{
            //var filter:any = {}
            //filter.sortByPrice = 5;
             var pom:any = {accessToken:''}
             pom  = response ;
             const helper = new JwtHelperService();
           
             const decodedToken = helper.decodeToken(pom['accessToken']);
             localStorage.setItem('user',JSON.stringify(decodedToken))
             return decodedToken;
          }
      )
      return "";
  }
  
  logout()
  {
      localStorage.removeItem('user')
  }
  
  register(newUser)
  {
      this.http.post(URL+'/register', newUser).subscribe(
          response=>{
             let pom  = response as Object;
             const helper = new JwtHelperService();
             const decodedToken = helper.decodeToken(pom['accessToken']);
             localStorage.setItem('user',JSON.stringify(decodedToken))
          }
      )
  }
  
  isLoggedIn()
  {
      const user = JSON.parse(localStorage.getItem('user'));
      if(user) return true 
      else return false;
  }

  getUser()
  {
    const user = JSON.parse(localStorage.getItem('user'));
    console.log(user)
    if(user)
    {
      return user;
    } 
  }

}




