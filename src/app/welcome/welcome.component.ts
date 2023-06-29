import { Component } from '@angular/core';
import { AppRoutingModule } from '../app-routing.module';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})


export class WelcomeComponent {
  
  welcome = true
  start() {
    this.welcome = false
  }
  back() {
    this.welcome = true
  }

}
