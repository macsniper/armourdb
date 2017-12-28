import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';


import { AppComponent } from './app.component';
import { ArmouritemsComponent } from './armouritems/armouritems.component';

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { ArmourService } from './armour.service';
import { ArmourfilterComponent } from './armourfilter/armourfilter.component';


@NgModule({
  declarations: [
    AppComponent,
    ArmouritemsComponent,
    ArmourfilterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    FormsModule
  ],
  providers: [ArmourService],
  bootstrap: [AppComponent]
})
export class AppModule { }
