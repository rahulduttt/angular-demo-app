import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  reportServer: string = 'http://192.168.8.104:8091/reportserver';
  reportUrl: string = 'ReceiptingInsuranceSystemReports/MonthlyPlatinumInsurance';
  showParameters: string = "true";
  parameters: any = {
    // "SampleStringParameter": null,
    // "SampleBooleanParameter" : false,
    "Month" : "9/2020",
    // "SampleDateTimeParameter" : "11/1/2020",
    // "SampleIntParameter" : 1,
    // "SampleFloatParameter" : "123.1234",
    // "SampleMultipleStringParameter": ["Parameter1", "Parameter2"]
  };
  language: string = "en-us";
  width: number = 100;
  height: number = 100;
  toolbar: string = "true";
}
