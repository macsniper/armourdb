import { Injectable } from '@angular/core';
import {ARMOURITEMS} from './data';
import * as _ from "lodash";


@Injectable()
export class ArmourService {
  
  
  filters = {}
  freetext = ''
  items = [];

  getArmourItems() {
    let filtered =  _.filter(this.items, this.filters);
    let filteredTotal = _.filter(filtered, (item) => _.includes(JSON.stringify(item), this.freetext));
    debugger;
    return filteredTotal;
  }

  setFilter(filter) {
    this.filters = filter;
  }

  setFreetext(text) {
    this.freetext = text;
  }

  constructor() {
    this.items = this.loadItems(); 
  }
  
  getArmourTypes() {
    return _.sortBy(_.uniq(this.items.map(item => item.typeParsed)));
  }

  loadItems() {
    let loadedItems: any[] = _.values(ARMOURITEMS)
      .filter(item => !_.isEmpty(item)); 
    loadedItems.forEach(item => item.typeParsed = item['Type'].match(/\((.*)\)/)[1]);
    return loadedItems;
  }

}
