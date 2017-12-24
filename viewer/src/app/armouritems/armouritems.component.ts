import { Component, OnInit } from '@angular/core';
import { ArmourService } from '../armour.service';

@Component({
  selector: 'app-armouritems',
  templateUrl: './armouritems.component.html',
  styleUrls: ['./armouritems.component.css']
})
export class ArmouritemsComponent implements OnInit {

  armouritems;

  getArmourItems(): void {
    this.armouritems = this.armourService.getArmourItems();
  }

  constructor(private armourService: ArmourService) { }

  ngOnInit() {
    this.getArmourItems();
  }

}
