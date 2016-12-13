import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

@Component({
  selector: 'app-temp-unit-convertor',
  templateUrl: './temp-unit-convertor.component.html',
  styleUrls: ['./temp-unit-convertor.component.css']
})
export class TempUnitConvertorComponent implements OnInit {

  constructor(private router: Router) { }
  ngOnInit() {
  }

 navigate() {
        this.router.navigate(["pageB"]);
  
}
}