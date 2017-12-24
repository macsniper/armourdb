import { Injectable } from '@angular/core';
import {ARMOURITEMS} from './data';
import * as _ from "lodash";


@Injectable()
export class ArmourService {
  
  filteredValues = _.valueS(ARMOURITEMS).filter((item) => !!item);  

  getArmourItems() {
    return filteredValues;
  }

  constructor() { }

}
