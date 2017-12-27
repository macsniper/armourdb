import { Injectable } from '@angular/core';
import {ARMOURITEMS} from './data';
import * as _ from "lodash";


@Injectable()
export class ArmourService {
  
  
  filters = {}
  items = [];

  getArmourItems() {
    return this.items;//_.filter(this.items, this.filters);
  }

  setFilter(filter) {
    this.filters = filter;
  }

  constructor() {
    this.items = this.loadItems(); 
  }

  loadItems() {
    let loadedItems: any[] = _.values(ARMOURITEMS)
      .filter(item => !_.isEmpty(item)); 
    loadedItems.forEach(item => item.typeParsed = item['Type'].match(/\(.*\)/)[0]);
    return loadedItems;
  }

}
