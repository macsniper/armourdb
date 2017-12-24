import { Injectable } from '@angular/core';
import {ARMOURITEMS} from './data';
import * as _ from "lodash";


@Injectable()
export class ArmourService {
  
  getArmourItems() {
    return _.values(ARMOURITEMS).filter((item) => !!item);
  }

  constructor() {
  }

}
