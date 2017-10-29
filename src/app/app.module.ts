import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule }  from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpModule } from '@angular/http';
import {HttpClientModule} from '@angular/common/http';
import { AddReviewPage } from '../pages/addReview/addReview';
import { FormsModule } from '@angular/forms';
import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/signInPage/signInPage';
import { JoinPage } from '../pages/joinPage/joinPage';
import { PageHeader } from '../components/pageHeader/pageHeader';
import { PageFooter } from '../components/pageFooter/pageFooter';
import { Countries } from '../components/countriesDropdown/countries';
import { Cards } from '../components/cards/cards';
import { DropdownEx } from '../components/dropdownEx/dropdownEx';
import { ProductFilterPipe } from '../components/dropdownEx/productFilterPipe';

// import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

@NgModule({
  declarations: [
    AppComponent,
    SignInPage,
    JoinPage,
    ProductFilterPipe,
    AddReviewPage,
    PageHeader,
    Countries,
    Cards,
    DropdownEx,
    PageFooter,
    HomePage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    ReactiveFormsModule,
    FormsModule,
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
