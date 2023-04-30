import { Component } from '@angular/core';

@Component({
  selector: 'app-elley-songs',
  templateUrl: './elley-songs.component.html',
  styleUrls: ['./elley-songs.component.css']
})
export class ElleySongsComponent {
  // ================================================= Image Hide show =================================================
  img_1: boolean = false;
  sound_ic_1: boolean = true;


  // ================================================= Audio =================================================
  audio = new Audio();

  play_middle_of_night() {
    this.audio.src = "../assets/songs/middle_of_night.mp4"
    this.audio.load();
    this.audio.play();
    this.img_1= true;
    this.sound_ic_1 = false;
  }

}
