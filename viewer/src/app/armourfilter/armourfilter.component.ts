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
    this.model = new ArmourFilterForm('', '', '', '', false, false, ''); 
    this.armourService.setFilter({});
    this.armourService.setFreetext('');
  }	

  onSubmit() {
    let filterObject:any = {};
    this.setFilterField(filterObject, ['typeParsed'], this.model.armourtype);
    this.setFilterField(filterObject, ['basic data', 'attributed production city'], this.model.productionCity);
    this.setFilterField(filterObject, ['basic data', 'attributed production region'], this.model.productionRegion);
    this.setFilterField(filterObject, ['basic data', 'part of suit'], this.model.partOfSuit);
    this.setFilterField(filterObject, ['basic data', 'part of pair'], this.model.partOfPair);
    this.setFilterField(filterObject, ['basic data', 'side of body'], this.model.sideOfBody);
    if(!_.isEmpty(this.model.freetext)) {
      this.armourService.setFreetext(this.model.freetext);
    }
    this.armourService.setFilter(filterObject);
  }

  private setFilterField(filterObject, path, value) {
    if(!(_.isEmpty(value) || value === "undefined") || value === true) {
      _.set(filterObject, path, value.toString());
    }
  }
}
 
