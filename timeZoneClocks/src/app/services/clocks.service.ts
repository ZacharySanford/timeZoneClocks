import { Injectable } from '@angular/core';
import { Clock } from '../interfaces/clock';

@Injectable({
  providedIn: 'root'
})
export class ClocksService {

  clockInfo : Clock[] = []

  constructor() {
    this.clockInfo.push({timeZone: 'Americas/Detroit', isDigital: false})
    this.clockInfo.push({timeZone: 'Asia/Seoul', isDigital: true})
   }

  getClockInfo() : Clock[] {
    return this.clockInfo;
  }

  addClock(){

  }

  editClock(){

  }

  deleteClock(){
    
  }

}
