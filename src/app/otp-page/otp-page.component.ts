import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-otp-page',
  templateUrl: './otp-page.component.html',
  styleUrls: ['./otp-page.component.css']
})
export class OtpPageComponent {
  constructor(private router: Router) {
  }

  GetOTP(){
    this.router.navigate(["/New-Password"])
  }

}
