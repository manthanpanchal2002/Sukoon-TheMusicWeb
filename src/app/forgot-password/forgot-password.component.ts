import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authencation.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.css']
})
export class ForgotPasswordComponent {
  email:string='';

  constructor(private router: Router, private authService: AuthService) {
  }

  forgotPasswd(){
    this.router.navigate(["/OTP-Page"])
    this.authService.setEmail(this.email);
  }
}
