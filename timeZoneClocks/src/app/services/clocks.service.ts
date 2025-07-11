import { Injectable } from '@angular/core';
import { Clock } from '../interfaces/clock';

@Injectable({
  providedIn: 'root'
})
export class ClocksService {

  clockInfo : Clock[] = []

  constructor() {
    this.clockInfo.push({id: 1, timeZone: 'Americas/Detroit', isDigital: false})
    this.clockInfo.push({id: 2, timeZone: 'Americas/Chicago', isDigital: true})
    this.clockInfo.push({id: 3, timeZone: 'Americas/Chihuahua', isDigital: true})
    this.clockInfo.push({id: 4, timeZone: 'Americas/Los Angeles', isDigital: true})
   }

  getClockInfo() : Clock[] {
    return this.clockInfo;
  }

  addClock(){
    this.clockInfo.push({id: 5, timeZone: 'Coordinated Universal Time (UTC)', isDigital: true})

  }

  editClock(){

  }

  deleteClock(){

  }

}
