import { Component } from '@angular/core';

@Component({
  selector: 'app-billie-songs',
  templateUrl: './billie-songs.component.html',
  styleUrls: ['./billie-songs.component.css']
})
export class BillieSongsComponent {

  // ================================================= Image Hide show =================================================
  img_1: boolean = false;
  sound_ic_1: boolean = true;


  // ================================================= Audio =================================================
  audio = new Audio();

  play_lovely() {
    this.audio.src = "../assets/songs/lovely.mp4"
    this.audio.load();
    this.audio.play();
    this.img_1= true;
    this.sound_ic_1 = false;
  }


}
