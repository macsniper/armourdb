import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ArmouritemsComponent } from './armouritems/armouritems.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ArmourService } from './armour.service';


@NgModule({
  declarations: [
    AppComponent,
    ArmouritemsComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot()
  ],
  providers: [ArmourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
