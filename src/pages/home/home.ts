import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Camera } from 'ionic-native';
import { CameraOptions } from 'ionic-native';
import { Geolocation } from 'ionic-native';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public title: String = 'Exercicio Ionic - Recursos Nativos';
  public img: String;
  public lat: number;
  public lon: number;

  constructor(public navCtrl: NavController) {
    this.img = "";
  }


  getPic(type: String) {

    let options: CameraOptions = {
      quality: 100,
      targetWidth: 800,
      targetHeight: 800
    }

    if (type === 'select' || type === 'take') {
      if (type === 'select') {
        options.sourceType = Camera.PictureSourceType.PHOTOLIBRARY;
      } else {
        options.sourceType = Camera.PictureSourceType.CAMERA;
      }

      Camera.getPicture(options).then((url) => {
        this.img = url;
      });
    } else {
      this.img = "";
    }

  }

  getLocation() {

    Geolocation.getCurrentPosition().then((resp) => {
      this.lat = resp.coords.latitude;
      this.lon = resp.coords.longitude;
    });

  }





}
