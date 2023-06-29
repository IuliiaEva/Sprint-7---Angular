import { Component, Input } from '@angular/core';
import { HomeComponent } from './home/home.component';
import { PanellComponent } from './panell/panell.component';
import { ModalComponent } from './panell/modal/modal.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { Presu } from './home/home.component';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {

  @Input() presus: Presu[] = []

}