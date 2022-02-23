import { interval, fromEvent, Observable } from 'rxjs'
import { Component } from '@angular/core';
import { ajax } from 'rxjs/ajax'

@Component({
  selector: 'app-subscription',
  template: `
    <h1 id="my-element">H1</h1>
  `
})

export class SubscriptionComponent {

  ngOnInit(): void {
    const secondsCounter = interval(1000);
    // Subscribe to begin publishing values
    secondsCounter.subscribe(n => {
      // console.log(`It's been ${n} seconds since subscribing!`)
    })
    
      const el = document.getElementById('my-element');

      // Create an Observable that will publish mouse movements
      const mouseMoves = fromEvent(el, 'mousemove');
      
      // Subscribe to start listening for mouse-move events
      const subscription = mouseMoves.subscribe((evt: MouseEvent) => {
        // Log coords of mouse movements
        // console.log(`Coords: ${evt.clientX} X ${evt.clientY}`);
      
        // When the mouse is over the upper-left of the screen,
        // unsubscribe to stop listening for mouse movements
        if (evt.clientX < 40 && evt.clientY < 40) {
          // console.log("mouseMoves unsubscribe");
          subscription.unsubscribe();
        }
      });
    
      const apiData = ajax('https://jsonplaceholder.typicode.com/todos/1');
      // Subscribe to create the request
      apiData.subscribe(res => console.log(res.status, res.response));
  }
}
