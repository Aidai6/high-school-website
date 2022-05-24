import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { CoursesComponent } from './home/courses/courses.component';
import { CampusComponent } from './home/campus/campus.component';
import { FacilitiesComponent } from './home/facilities/facilities.component';
import { TestimonialsComponent } from './home/testimonials/testimonials.component';
import { CtaComponent } from './home/cta/cta.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { CoursesPageComponent } from './courses-page/courses-page.component';
import { ContactUsComponent } from './contact-us/contact-us.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    CoursesComponent,
    CampusComponent,
    FacilitiesComponent,
    TestimonialsComponent,
    CtaComponent,
    FooterComponent,
    HomeComponent,
    AboutComponent,
    CoursesPageComponent,
    ContactUsComponent
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
