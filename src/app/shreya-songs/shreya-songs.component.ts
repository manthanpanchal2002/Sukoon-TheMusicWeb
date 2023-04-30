import { Component } from '@angular/core';

@Component({
  selector: 'app-shreya-songs',
  templateUrl: './shreya-songs.component.html',
  styleUrls: ['./shreya-songs.component.css']
})
export class ShreyaSongsComponent {

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

  play_agar_tum_mile_jao() {
    this.audio.src = "../assets/songs/agar_tum_mile_jao.mp4"
    this.audio.load();
    this.audio.play();
    this.img_1= true;
    this.sound_ic_1 = false;
  }

  play_deewani_mastani() {
    this.audio.src = "../assets/songs/deewani_mastani.mp4"
    this.audio.load();
    this.audio.play();
    this.img_2 = true;
    this.sound_ic_2 = false;
  }

  play_manwa_lage(){
    this.audio.src = "../assets/songs/manwa_lage.mp4"
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
