import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations'
import { UnlessDirective } from './app.unless.directive'
import { HighlightDirective } from './app.highlight.directive'
import { ExponentialStrengthPipe } from './app.component.pipe'
import { FetchJsonPipe } from './app.component.fetch.pipe'
import { AstronautComponent } from './mission/app.mission.astonaut.component'
import { MissionComponent } from './mission/app.mission.component'
import { HomeComponent } from './home/app.home.component'
import { AppChildComponent } from './child/app.child.component'
import { PopupService } from './popup/app.popup.service'
import { TestComponent } from './test/app.test.component';

@NgModule({
  declarations: [
    AppComponent,
    UnlessDirective,
    HighlightDirective,
    ExponentialStrengthPipe,
    FetchJsonPipe,
    AstronautComponent,
    MissionComponent,
    HomeComponent,
    AppChildComponent,
    TestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ReactiveFormsModule
  ],
  providers: [PopupService],
  bootstrap: [AppComponent],
  entryComponents: []
})
export class AppModule { }
