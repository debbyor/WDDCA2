import { HomeComponent } from './home/home.component';
import { TempUnitConvertorComponent } from './temp-unit-convertor/temp-unit-convertor.component';
import { BmiCalculatorComponent } from './bmi-calculator/bmi-calculator.component';


export const AppRoutes: any = [
    { path: "", component: HomeComponent },
    { path: "pageA", component: TempUnitConvertorComponent },
    { path: "pageB", component: BmiCalculatorComponent }
];
 
export const AppComponents: any = [
    HomeComponent,
    TempUnitConvertorComponent,
    BmiCalculatorComponent
];