import { Component, OnInit } from '@angular/core';
import { ArmourService } from '../armour.service';

@Component({
  selector: 'app-armouritems',
  templateUrl: './armouritems.component.html',
  styleUrls: ['./armouritems.component.css']
})
export class ArmouritemsComponent implements OnInit {

  getArmourItems(): any[] {
    return this.armourService.getArmourItems();
  }

  getArmourItemsCount() {
    return this.armourService.getArmourItemCount();
  }

  constructor(private armourService: ArmourService) { }

  ngOnInit() {
  }

}
