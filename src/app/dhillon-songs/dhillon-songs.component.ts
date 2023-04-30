import { Component } from '@angular/core';

@Component({
  selector: 'app-dhillon-songs',
  templateUrl: './dhillon-songs.component.html',
  styleUrls: ['./dhillon-songs.component.css']
})
export class DhillonSongsComponent {

  // ================================================= Image Hide show =================================================
  img_1: boolean = false;
  sound_ic_1: boolean = true;

  img_2: boolean = false;
  sound_ic_2: boolean = true;

  img_3: boolean = false;
  sound_ic_3: boolean = true;

  img_4: boolean = false;
  sound_ic_4: boolean = true;

  // ================================================= Audio =================================================
  audio = new Audio();

  play_brown_munde() {
    this.audio.src = "../assets/songs/brown_munde.mp4"
    this.audio.load();
    this.audio.play();
    this.img_1= true;
    this.sound_ic_1 = false;
  }

  play_excuses() {
    this.audio.src = "../assets/songs/excuses.mp4"
    this.audio.load();
    this.audio.play();
    this.img_2 = true;
    this.sound_ic_2 = false;
  }

  play_wo_noor(){
    this.audio.src = "../assets/songs/wo_noor.mp4"
    this.audio.load();
    this.audio.play();
    this.img_3 = true;
    this.sound_ic_3 = false;

  }

  play_hasi_ban_gaye(){
    this.audio.src = "../assets/songs/hasi_ban_gaye.mp4"
    this.audio.load();
    this.audio.play();
    this.img_4 = true;
    this.sound_ic_4 = false;

  }

}
