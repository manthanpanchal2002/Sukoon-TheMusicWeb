import { Component } from '@angular/core';

@Component({
  selector: 'app-armaan-songs',
  templateUrl: './armaan-songs.component.html',
  styleUrls: ['./armaan-songs.component.css']
})
export class ArmaanSongsComponent {

  // ================================================= Image Hide show =================================================
  img_1: boolean = false;
  sound_ic_1: boolean = true;

  img_2: boolean = false;
  sound_ic_2: boolean = true;

  img_3: boolean = false;
  sound_ic_3: boolean = true;

  // ================================================= Audio =================================================
  audio = new Audio();

  play_jab_tak() {
    this.audio.src = "../assets/songs/jab_tak.mp4"
    this.audio.load();
    this.audio.play();
    this.img_1= true;
    this.sound_ic_1 = false;
  }

  play_hua_hai_aaj_pehli_bar() {
    this.audio.src = "../assets/songs/hua_hai_pehli_bar.mp4"
    this.audio.load();
    this.audio.play();
    this.img_2 = true;
    this.sound_ic_2 = false;
  }

  play_dil_me_ho_tum(){
    this.audio.src = "../assets/songs/dil_me_tum.mp4"
    this.audio.load();
    this.audio.play();
    this.img_3 = true;
    this.sound_ic_3 = false;

  }
    

}
