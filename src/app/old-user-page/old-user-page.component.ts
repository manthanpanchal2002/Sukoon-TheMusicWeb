import { Component } from '@angular/core';
import { AuthService } from '../services/authencation.service';

@Component({
  selector: 'app-old-user-page',
  templateUrl: './old-user-page.component.html',
  styleUrls: ['./old-user-page.component.css']
})
export class OldUserPageComponent {
  name:string|undefined;
  constructor(private authService:AuthService){
    this.name=authService.getName();
  }

}
