import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

kingList = [
	{
		name:"Sultan Muhammad V",
		year:"2016 - 2019",
		img_url:"https://www.parlimen.gov.my/images/webuser/bkk/AGONG.jpg",
		state:"Kelantan",
		nickname: "ahhhshehdh"
	},
	{
		name:"Sultan Abdul Halim Mu'adzam Shah",
		year:"2011 - 2016",
		img_url:"https://www.parlimen.gov.my/images/webuser/agong/agong14.jpg",
		state:"Kedah",
		nickname: "uhhuhuhuhuhuh"
	},
	{
		name:"Tuanku Mizan Zainal Abidin",
		year:"2006 - 2011",
		img_url:"https://www.parlimen.gov.my/images/webuser/agong/13.jpg",
		state:"Terengganu",
		nickname: "zxnnncff"
	},
	{
		name:"Tuanku Syed Sirajuddin",
		year:"2001 - 2006",
		img_url:"https://www.parlimen.gov.my/images/webuser/agong/12.jpg",
		state:"Perlis",
		nickname: "nadinrnwe"
	},
	{
		name:"Sultan Salahuddin Abdul Aziz Shah Alhaj",
		year:"1999 - 2001",
		img_url:"https://www.parlimen.gov.my/images/webuser/agong/11.jpg",
		state:"Selangor",
		nickname:"lalabear"
	}

]

  constructor(public navCtrl: NavController) {

  }
  openPage(king){
  	this.navCtrl.push('DetailsPage', {king:king})
  }

}
