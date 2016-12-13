import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  choice: string = null;
  celcius: number = null;
  fahrenheit: number = null;
  count: number = 0;
  
  checkId(id) {
    this.choice = id;
  }

  converts(){
    if (this.choice === "c") {
      this.fahrenheit = this.celcius * 9 / 5 + 32;
    } 
    else {
      this.celcius = (this.fahrenheit - 32) * 5 / 9;
    }	
    this.count++;
  }
}
