import { Component } from '@angular/core';
import { NavController, ToastController } from 'ionic-angular';
import { Camera, CameraOptions } from '@ionic-native/camera';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	image:any;
	options: CameraOptions = {
	 quality: 100,
	 destinationType: this.camera.DestinationType.DATA_URL,
	 encodingType: this.camera.EncodingType.JPEG,
	 mediaType: this.camera.MediaType.PICTURE
	}

  constructor(public navCtrl: NavController, public toastCtrl: ToastController, public camera: Camera) {
  }

  capturePicture(){
    this.camera.getPicture(this.options)
    .then(imageData => {
    	let base64Image = 'data:image/jpeg;base64,' + imageData;
    	this.image = base64Image;
    },(err) => {
    	let toast = this.toastCtrl.create({
    		message: err,
    		duration: 3000
    	});
    	toast.present();
    });
  }
}
