import { Component, OnInit } from '@angular/core';
import { ArmourService } from '../armour.service';

@Component({
  selector: 'app-armouritems',
  templateUrl: './armouritems.component.html',
  styleUrls: ['./armouritems.component.css']
})
export class ArmouritemsComponent implements OnInit {

  filteredArmourItems;
  armouritems;

  getArmourItems(): void {
    this.armouritems = this.armourService.getArmourItems();
  }

  filter(): void {
     
  }

  constructor(private armourService: ArmourService) { }

  ngOnInit() {
    this.getArmourItems();
    this.filteredArmourItems = this.armouritems;
  }

  onFilter(event: any) {

  }

}
