import { Injectable } from '@angular/core';
import URL from '../../apis/api'
import {HttpClient} from '@angular/common/http';
import { JwtHelperService } from '@auth0/angular-jwt';
import {Router} from '@angular/router'

@Injectable({
  providedIn: 'root'
})


export class AuthenticationService {

  constructor(private http:HttpClient,private router:Router){}

   login(email,password) 
  {
      let data = {
          "email": email,
          "password": password
      }
      this.http.post(URL+'/login', data).subscribe(
          response=>{

             var pom:any = {accessToken:''}
             pom  = response ;
             const helper = new JwtHelperService();
             const decodedToken = helper.decodeToken(pom['accessToken']);
             localStorage.setItem('user',JSON.stringify(decodedToken))
             this.router.navigate(['/'])
             return("error")
          }
      )
     
  }
  
  logout()
  {
      localStorage.removeItem('user')
  }
  
  register(newUser)
  {
   
      this.http.post(URL+'/register', newUser).subscribe(
          response=>{
            this.router.navigate(['/'])
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
   
    if(user)
    {
      return user;
    } 
  }

  getUserById(id)
  {
      return this.http.get(URL+"/users/"+id);
  }




}