import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private nativeAudio: NativeAudio) {
      this.mandale();
  }


  mandale() {
    this.nativeAudio.preloadSimple('puto', 'audio/twit.mp3');
  }
  sound() {
    this.nativeAudio.play('puto');
  }

}
