import { Component, OnInit } from '@angular/core';
import { Auth } from '../auth.interface';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  auth: Auth = {
    email: '',
    password: '',
    returnSecureToken: true
  }
 

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit(): void {
    
  }

  Login(){
    this.authService.login(this.auth)
        .subscribe( resp => {
          this.router.navigate(['./clientes']);
        })
    
  }



}
