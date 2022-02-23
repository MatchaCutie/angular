import { OnInit, ViewChild } from '@angular/core';
import { Component, Injector } from '@angular/core';
import { Hero } from '../hero'
import { AppChildComponent } from '../child/app.child.component'
import { Router, NavigationExtras } from '@angular/router'
import { PopupService } from '../popup/app.popup.service'
import { PopupComponent } from '../popup/app.popup.component'
import { createCustomElement } from '@angular/elements';

@Component({
  selector: 'app-home',
  templateUrl: './app.home.component.html',
  styleUrls: ['./app.home.component.scss']
})
export class HomeComponent implements OnInit {
  title: string
  nameList: string[] = ["alice", "bob", "cindy"]
  heroList: Hero[] = new Array<Hero>(new Hero(1, "heroName"), null)
  toChildData: number
  toChildData1: number
  birthday = new Date(1988, 3, 15);

  @ViewChild(AppChildComponent)
    private childComponnet: AppChildComponent

  constructor(private router: Router, injector: Injector, public popup: PopupService) {
    // Convert `PopupComponent` to a custom element.
    const PopupElement = createCustomElement(PopupComponent, {injector});
    // Register the custom element with the browser.
    customElements.define('popup-element', PopupElement);
  }

  ngOnInit(): void {
    console.log('init');
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.title = "my-app"
    this.toChildData = 123
    this.toChildData1 = 111
  }
  handleEmit(childData: string): void {
    console.log(childData)
    this.nameList.push(childData)
    this.toChildData++
    this.toChildData1++ 
  }
  doChildFunction(param: string) {
    this.childComponnet.forParentUser(param)
  }
  toMission() {
    // this.router.navigateByUrl('/mission?name=111');
    // window.location.assign('/mission?name=111');
    // this.router.navigate(['/mission'],{queryParams:{name:'key'}})
    let navigationExtras: NavigationExtras = {
      queryParams: { 'session_id': '123', 'name': '111', 'id': 1 },
      fragment: 'anchor'
    };
    this.router.navigate(['/mission'], navigationExtras)
  }
}
