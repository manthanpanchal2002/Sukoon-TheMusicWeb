import { Component } from '@angular/core';
import { AuthService } from '../services/authencation.service';

@Component({
  selector: 'app-new-user-page',
  templateUrl: './new-user-page.component.html',
  styleUrls: ['./new-user-page.component.css']
})
export class NewUserPageComponent {
  name:string|undefined;
  constructor(private authService:AuthService){
    this.name=authService.getName();
  }

}
