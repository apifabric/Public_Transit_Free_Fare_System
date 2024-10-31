import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CitizenQualifyingReason-new',
  templateUrl: './CitizenQualifyingReason-new.component.html',
  styleUrls: ['./CitizenQualifyingReason-new.component.scss']
})
export class CitizenQualifyingReasonNewComponent {
  @ViewChild("CitizenQualifyingReasonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}