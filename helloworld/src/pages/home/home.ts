import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import { ActionSheetController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	msg=""
	counter = 0
	myName = "Surraj Ramanathan"
	constructor(public navCtrl: NavController, public alertCtrl: AlertController, 
		public actionSheetCtrl: ActionSheetController, public toastCtrl: ToastController) {

	}

presentToast() {
				const toast = this.toastCtrl.create({
					message: 'Number cannot be negative',
					duration: 3000
				});
				toast.present();
			}
	actionSheet() {
		let actionSheet = this.actionSheetCtrl.create({
			title: 'Can I go back or not ?',
			buttons: [
			{
				text: 'No',
				role: 'destructive',
				handler: () => {
					console.log('Destructive clicked');
				}
			},
			{
				text: 'Yes',
				handler: () => {
					console.log('Archive clicked');
				}
			},
			{
				text: 'Cancel',
				role: 'cancel',
				handler: () => {
					console.log('Cancel clicked');
				}
			}
			]
		});

		actionSheet.present();
	}

	aboutUs() {
		const alert = this.alertCtrl.create({
			title: 'Hi there!',
			subTitle: 'My name is Surraj Ramanathan! I am having a hard time as my mac already rosak, tq',
			buttons: ['Wokayyy']
		});
		alert.present();
	}

	buttonPressed(){
		this.msg=""
		this.counter++
	}

	buttonDecrement(){
		
		if(this.counter == 0){
			this.presentToast();
		}else{
			this.counter--
		}
	}

	buttonReset(){
		this.msg = ""
		this.counter=0
	}

	newPage(){
		this.navCtrl.push('SecondPage')
	}

}
