import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/signInPage/signInPage';
import { JoinPage } from '../pages/joinPage/joinPage';
import { PageHeader } from '../components/pageHeader/pageHeader';
import { PageFooter } from '../components/pageFooter/pageFooter';
import { Cards } from '../components/cards/cards';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    JoinPage,
    PageHeader,
    Cards,
    PageFooter,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
    entryComponents: [
    AppComponent,
    PageHeader,
    Cards,
    SignInPage,
    PageFooter,
    

    HomePage
  ],
})
export class AppModule { }
