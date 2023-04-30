import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/authencation.service';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent {
  email: string | undefined;
  constructor(private router: Router, private authService: AuthService) {
    this.email = authService.getEmail();
  }

  GetOTP() {
    this.router.navigate(["/New-Password"])
  }

}
