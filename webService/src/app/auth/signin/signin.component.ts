import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/guards/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  constructor(private authService: AuthService, private router:Router) { }

  ngOnInit() {


  }
  onSignup(form: NgForm){
    const email = form.value.email;
    const password = form.value.password;
    this.authService.login(email,password);
    this.router.navigate(['/home']);
  }

}
