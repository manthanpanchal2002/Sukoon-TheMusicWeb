import { Component } from '@angular/core';
import { Router } from '@angular/router';
// import { Database, onValue, ref, update } from 'firebase/database';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.component.html',
  styleUrls: ['./new-password.component.css']
})
export class NewPasswordComponent {
  constructor(private router: Router) { }
  UpdatePass(value: any) {
    // update(ref(this.database, 'users/' + value.user_name), {
    //   password: value.password,
    // });
    // console.log("Value updated");

    this.router.navigate(['/CommingSoon'])

  }
}
