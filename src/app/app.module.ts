import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AddReviewPage } from '../pages/addReview/addReview';

import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/signInPage/signInPage';
import { JoinPage } from '../pages/joinPage/joinPage';
import { PageHeader } from '../components/pageHeader/pageHeader';
import { PageFooter } from '../components/pageFooter/pageFooter';
import { Countries } from '../components/countriesDropdown/countries';
import { Cards } from '../components/cards/cards';
// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    JoinPage,
    AddReviewPage,
    PageHeader,
    Countries,
    Cards,
    PageFooter,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
HttpClientModule,
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
