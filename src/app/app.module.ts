import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { HeroContentComponent } from './MyComponents/hero-content/hero-content.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BodyContent1Component } from './MyComponents/body-content1/body-content1.component';
import { BodyContent2Component } from './MyComponents/body-content2/body-content2.component';
import { BodyContent3Component } from './MyComponents/body-content3/body-content3.component';
import { BodyContent4Component } from './MyComponents/body-content4/body-content4.component';
import { BodyContent5Component } from './MyComponents/body-content5/body-content5.component';
import { BodyContent6Component } from './MyComponents/body-content6/body-content6.component';
import { BodyContent7Component } from './MyComponents/body-content7/body-content7.component';
import { BodyContent8Component } from './MyComponents/body-content8/body-content8.component';
import { BodyContent9Component } from './MyComponents/body-content9/body-content9.component';
import { FooterComponent } from './MyComponents/footer/footer.component';
import { BodyContent10Component } from './MyComponents/body-content10/body-content10.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroContentComponent,
    BodyContent1Component,
    BodyContent2Component,
    BodyContent3Component,
    BodyContent4Component,
    BodyContent5Component,
    BodyContent6Component,
    BodyContent7Component,
    BodyContent8Component,
    BodyContent9Component,
    FooterComponent,
    BodyContent10Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
