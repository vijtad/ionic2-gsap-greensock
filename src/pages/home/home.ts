import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import gsap from "gsap";
 
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
 
 toolTimeline  =  new gsap.TimelineLite({paused: true});
  constructor(public navCtrl: NavController) {
     
   
  }
 
  ionViewDidLoad(){
 
    var duration = .5;
    this.toolTimeline.from('.mainTitle', duration, {y:-100, opacity: 0, scale:5, ease:Linear.easeInOut});
    this.toolTimeline.add(TweenLite.to('.letterV', duration, {y:-100, ease:Linear.easeInOut}));
    this.toolTimeline.add(TweenLite.to('.letterP', duration, {y:-100, ease:Bounce.easeInOut}));
    this.toolTimeline.add(TweenLite.to('.letterT', duration, {y:-100, ease:Elastic.easeInOut}));
    this.toolTimeline.to('.mainTitle', duration, {right: -50, ease:Back.easeInOut},.1);
 
  }
 
  start(){
    this.toolTimeline.play();
  }
 
  pause(){
    this.toolTimeline.pause();
  }
 
  stop(){
    this.toolTimeline.stop();
  }
 
  reverse(){
    this.toolTimeline.reverse();
  }
 
}