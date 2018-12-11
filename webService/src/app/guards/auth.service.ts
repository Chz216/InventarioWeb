import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }

  private isloggedIn: boolean = false;
  login(email: string, password:string ): boolean{
    if(email=="luis@gmail.com" && password=="12345"){
      console.log(email=="luis@gmail.com" && password=="12345")
      this.isloggedIn=true;
    }else{
      this.isloggedIn=false;
    }
    return this.isloggedIn;

  }
  logout(): boolean {
    return this.isloggedIn=false;
   }
  isUserLoggdIn(){
    return this.isloggedIn;
  }

}
