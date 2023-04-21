import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { onValue } from 'firebase/database';
import { AuthService } from '../services/authencation.service';


@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent {
  name:string="";
  constructor(public database: Database, private router: Router, private authService: AuthService) {
  }
  // writing data
  SignUp(value: any) {

    
    set(ref(this.database, 'users/' + value.user_name), {
      username: value.user_name,
      email: value.user_email,
      password: value.user_password,
      // profile_picture: imageUrl
    });
    // console.log("User Created");
    this.router.navigate(["/newUserPage"])
    this.authService.setName(this.name);
  }
  

}
