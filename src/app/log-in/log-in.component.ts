import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { onValue } from 'firebase/database';
import { getDatabase} from "firebase/database";
import { AuthService } from '../services/authencation.service';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  name:string='';
  constructor(public database: Database, private router: Router, private authService: AuthService) {
  }

  LogIn(value: any) {
    // set(ref(this.database, 'users/' + value.user_name), {
    //   username: value.user_name,
    //   email: value.user_email,
    //   password: value.user_password,
    //   // profile_picture: imageUrl
    // });
    // // console.log("User Created");
    // this.router.navigate(["/newUserPage"])

    // reading data
    // const db = getDatabase();
    const starCountRef = ref(this.database, 'users/' + value.user_name);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      snapshot.exists()
      // alert(data.password)
      if (snapshot.exists()) {
        this.router.navigate(["/oldUserPage"])
        this.authService.setName(this.name);
        console.log("User Found");
      }
      else{
        // this.router.navigate(["/signup"])
        console.log("User not Found. create your account");
      }
    });


  }

}
