import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'IncomeThreshold-new',
  templateUrl: './IncomeThreshold-new.component.html',
  styleUrls: ['./IncomeThreshold-new.component.scss']
})
export class IncomeThresholdNewComponent {
  @ViewChild("IncomeThresholdForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}