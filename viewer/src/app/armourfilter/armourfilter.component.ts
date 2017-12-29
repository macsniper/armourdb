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
  productionCities;
  productionRegions;

  constructor(private armourService: ArmourService) { }

  ngOnInit() {
    this.armourTypes = this.armourService.getArmourTypes();
    this.productionCities = this.armourService.getProductionCities();
    this.productionRegions = this.armourService.getProductionRegions();
    this.formReset();
  }
 
  formReset() {
    this.model = new ArmourFilterForm('', '', '', ''); 
    this.armourService.setFilter({});
    this.armourService.setFreetext('');
  }	

  onSubmit() {
    let filterObject:any = {};
    if(!(_.isEmpty(this.model.armourtype) || this.model.armourtype === "undefined")) {
      filterObject.typeParsed = this.model.armourtype;
    } 
    if(!(_.isEmpty(this.model.productionCity) || this.model.productionCity === "undefined")) {
      _.set(filterObject, ['basic data', 'attributed production city'], this.model.productionCity);
    }
    if(!(_.isEmpty(this.model.productionRegion) || this.model.productionRegion === "undefined")) {
      _.set(filterObject, ['basic data', 'attributed production region'], this.model.productionRegion);
    }
    if(!_.isEmpty(this.model.freetext)) {
      this.armourService.setFreetext(this.model.freetext);
    }
    debugger;
    this.armourService.setFilter(filterObject);
  }
}
 
