import { Component } from '@angular/core';
import { HomePage } from '../pages/home/home';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  rootPage:any = HomePage;
}
