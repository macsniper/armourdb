import { Component, OnInit } from '@angular/core';

import * as _ from "lodash";

import { ArmourFilterForm } from '../armour-filter-form'; 
import { ArmourService } from '../armour.service';

@Component({
  selector: 'app-armourfilter',
  templateUrl: './armourfilter.component.html',
  styleUrls: ['./armourfilter.component.css']
})
export class ArmourfilterComponent implements OnInit {

  model;
  armourTypes;

  constructor(private armourService: ArmourService) { }

  ngOnInit() {
    this.armourTypes = this.armourService.getArmourTypes();
    this.formReset();
  }
 
  formReset() {
    this.model = new ArmourFilterForm('', ''); 
    this.armourService.setFilter({});
  }	

  onSubmit() {
    console.log('form submitted');
    let filterObject:any = {};
    if(!_.isEmpty(this.model.armourtype)) {
      filterObject.typeParsed = this.model.armourtype;
    } 
    this.armourService.setFreetext(this.model.freetext);
    this.armourService.setFilter(filterObject);
  }
}
