import { Component, Input, Output, EventEmitter, SimpleChanges, OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core'

@Component({
  selector: 'app-child',
  templateUrl: './app.child.component.html',
  styleUrls: ['./app.child.component.scss']
})

export class AppChildComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input("data") parentData: any
  @Input("data1") parentData1: any
  @Output("clickEmit") childEmit: EventEmitter<string> = new EventEmitter<string>()

  childData: string
  
  onKey(event: KeyboardEvent) {
    console.log(event)
    this.childData = (event.target as HTMLInputElement).value + ' | '
  }

  handleChildEmit(): void {
    // this.http.get('https://jsonplaceholder.typicode.com/todos/1').subscribe(res => {
    //   console.log(res)
    // })
    this.childEmit.emit(this.childData)
  }

  forParentUser(param: any) {
    console.log("child say: my parent data is " + param)
  }

  ngOnChanges(changes: SimpleChanges): void {
    //Called before any other lifecycle hook. Use it to inject dependencies, but avoid any serious work here.
    //Add '${implements OnChanges}' to the class.
    console.log("child do ngOnChanges")
    console.log("child watch change")
    console.log(changes)
  }
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    console.log("child do ngOnInit")
  }
  ngDoCheck(): void {
    //Called every time that the input properties of a component or a directive are checked. Use it to extend change detection by performing a custom check.
    //Add 'implements DoCheck' to the class.
    // console.log("child do ngDoCheck")
  }
  ngAfterContentInit(): void {
    //Called after ngOnInit when the component's or directive's content has been initialized.
    //Add 'implements AfterContentInit' to the class.
    console.log("child do ngAfterContentInit")
  }
  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    // console.log("child do ngAfterContentChecked")
  }
  ngAfterViewInit(): void {
    //Called after ngAfterContentInit when the component's view has been initialized. Applies to components only.
    //Add 'implements AfterViewInit' to the class.
    console.log("child do ngAfterViewInit")
  }
  ngAfterViewChecked(): void {
    //Called after every check of the component's view. Applies to components only.
    //Add 'implements AfterViewChecked' to the class.
    // console.log("child do ngAfterViewChecked")
  }
  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    console.log("child do ngOnDestroy")
  }
  color: string
}
