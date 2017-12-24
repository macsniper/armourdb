import { Injectable } from '@angular/core';
import {ARMOURITEMS} from './data';
import * as _ from "lodash";


@Injectable()
export class ArmourService {
  
  filteredValues = _.values(ARMOURITEMS).filter((item) => !!item);  

  getArmourItems() {
    return filteredValues;
  }

  constructor() { }

}
