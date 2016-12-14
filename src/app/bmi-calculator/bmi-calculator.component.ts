import { Component, OnInit } from '@angular/core';
import { Location } from "@angular/common";

@Component({
  selector: 'app-bmi-calculator',
  templateUrl: './bmi-calculator.component.html',
  styleUrls: ['./bmi-calculator.component.css']
})
export class BmiCalculatorComponent implements OnInit {

  constructor(private location: Location) { }
 
    goBack() {
        this.location.back();
    }

  ngOnInit() { }
   weightChoice:string = "";
  heightChoice:string = "";  

 
  stone:number = null;
  pounds:number = null;
  kgs:number = null;


  feet:number = null;
  inches:number = null;
  metres:number = null;

 
  bmi:number = null;
  range:string = "";
  message:string = "";


 convertWeight(id) {
    this.weightChoice = id;

    if (this.weightChoice === "stone") {
      this.kgs = this.stone * 6.3503;   
      this.kgs = Math.round(this.kgs * 100) / 100; 
    }
    else if (this.weightChoice === "pounds") {
      this.kgs = this.kgs + this.pounds * 0.4536;
      this.kgs = Math.round(this.kgs * 100) / 100;
    }
    else {
      this.stone = this.kgs / 6.3503;
      this.pounds = this.stone * 14;
      this.pounds = this.pounds % 14;
      this.stone = Math.round(this.stone * 100) / 100;
      this.pounds = Math.round(this.pounds * 100) / 100;
    }
  }

  convertHeight(id) {
    this.heightChoice = id;

    if (this.heightChoice === "feet") {
      this.metres = this.feet * 0.3048;
      this.metres = Math.round(this.metres * 100) / 100;
    }
    else if (this.heightChoice === "inches") {
      this.metres += this.inches * 0.0254;
      this.metres = Math.round(this.metres * 100) / 100;
    }
    else {
      this.feet = this.metres * 3.28084;
      this.inches = this.feet * 12.000;
      this.inches = this.inches % 12;
      this.inches = Math.round(this.inches * 100) / 100.0;
      this.feet = Math.round(this.feet * 100) / 100;
    }
  }

  calcBMI() {
    this.bmi = this.kgs / (this.metres * this.metres);
    this.bmi = Math.round(this.bmi * 100) / 100;

    if (this.bmi >= 0 && this.bmi < 18) {
    this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
    this.range = "Underweight Range";
    }
    else if (this.bmi >= 18 && this.bmi < 25) { 
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.range = "Normal Range";
    } 
    else if (this.bmi >= 25) {
      this.message = "Your estimated BMI is " + this.bmi + ", this is in the ";
      this.range = "Overweight Range";
    }
    // this else is catching exception (no values entered and/or infinity BMI)
    else {
      this.message = "Values must be entered to perform calculation!";
    }
  }

  
 
colorcode(){
  if(this.range == "Normal Range"){
    return "green";
  }

  if(this.range == "Overweight Range"){
    return "red";
  }
  if(this.range == "Underweight Range"){
    return "red";
  }
}

}
