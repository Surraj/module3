import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {

	toDoList=[

{
	name:"FreecodeCamp",
	details:"Complete 3 problems",
	dueDate:"3 days more",
	img_url:"https://pbs.twimg.com/profile_images/692531829287567360/ytP7U362_400x400.png"
},
{
	name:"Study the Slides",
	details:"ARS slides",
	dueDate:"2 days more",
	img_url:"https://images.g2crowd.com/uploads/product/image/large_detail/large_detail_1506966761/google-slides.png"
},
{
	name:"Project Prototype",
	details:"Complete first part of project",
	dueDate:"10 days more",
	img_url:"https://www.extremetech.com/wp-content/uploads/2014/10/project-ara-modular-phone-spiral-1-640x353.jpg"
},
{
	name:"Add detail page",
	details:"Complete detail page",
	dueDate:"100 days more",
	img_url:"data:image/jpeg;base64,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"
}







]
  constructor(public navCtrl: NavController) {

  }

  openForm(){
  	this.navCtrl.push('FormPage')
  }
  openDetail(detail){
  	this.navCtrl.push('DetailsPage', {detail:detail})
  }

}
