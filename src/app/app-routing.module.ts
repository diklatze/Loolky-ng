import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePage } from '../pages/home/home';
import { SignInPage } from '../pages/signInPage/signInPage';
import { JoinPage } from '../pages/joinPage/joinPage';
import { AddReviewPage } from '../pages/addReview/addReview';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomePage },
  //{ path: 'detail/:id', component: HeroDetailComponent },
  { path: 'signIn', component: SignInPage },
  { path: 'addReview', component: AddReviewPage },
  { path: 'join', component: JoinPage }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
