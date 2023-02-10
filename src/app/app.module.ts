import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { InitialPageComponent } from './components/mainPage/mainPage.component';
import { ModalRegisterComponent } from './components/register/register.component';
import { EventsComponent } from './components/events/events.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

import { StoreModule } from '@ngrx/store';
import { reducer } from './store';
import { CarouselComponent } from './components/carousel/carousel.component';
import { CarouselItemComponent } from './components/carousel/carousel-item/carousel-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    InitialPageComponent,
    ModalRegisterComponent,
    EventsComponent,
    LoginComponent,
    DashboardComponent,
    CarouselComponent,
    CarouselItemComponent,
  ],
  imports: [BrowserModule, StoreModule.forRoot({ auth: reducer })],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}

/* import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { reducer } from './store';

@NgModule({
  imports: [StoreModule.forRoot({ auth: reducer })],
}) */
