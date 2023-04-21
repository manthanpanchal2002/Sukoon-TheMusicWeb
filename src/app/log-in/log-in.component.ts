import { Component } from '@angular/core';
import { Database, set, ref, update } from '@angular/fire/database';
import { Router } from '@angular/router';
import { onValue } from 'firebase/database';
import { getDatabase} from "firebase/database";

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.css']
})
export class LogInComponent {
  constructor(public database: Database, private router: Router) {
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
    const db = getDatabase();
    const starCountRef = ref(this.database, 'users/' + value.user_name);
    onValue(starCountRef, (snapshot) => {
      const data = snapshot.val();
      // this.router.navigate(["/oldUserPage"])
      alert(data.user_email)
      // if (value.user_email == data.user_email) {
      //   alert("User Found");

      // }
    });


  }

}
