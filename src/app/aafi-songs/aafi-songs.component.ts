import { Component } from '@angular/core';

@Component({
  selector: 'app-aafi-songs',
  templateUrl: './aafi-songs.component.html',
  styleUrls: ['./aafi-songs.component.css']
})
export class AafiSongsComponent {



  // ================================================= Image Hide show =================================================

  main_img: boolean = false;
  sound_ic: boolean = true;

  sound_ic_toggle() {
    this.sound_ic = false;
  }

  main_img_toggle() {
    this.main_img = true;
  }

  // ================================================= Audio =================================================
  audio = new Audio();

  playsong() {
    this.audio.src = "../assets/songs/Y2Mate.is - Aafi - Let It Go-G-jUb2PnWoA-48k-1659506877389.mp3"
    this.audio.load();
    this.audio.play();
  }

  Stopsong() {

    // let audio = new Audio();
    // audio.src = "../assets/songs/Y2Mate.is - Aafi - Let It Go-G-jUb2PnWoA-48k-1659506877389.mp3"
    // audio.load();
    this.audio.pause();

  }


}
