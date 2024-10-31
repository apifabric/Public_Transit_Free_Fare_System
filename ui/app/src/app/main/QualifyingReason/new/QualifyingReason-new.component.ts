import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'QualifyingReason-new',
  templateUrl: './QualifyingReason-new.component.html',
  styleUrls: ['./QualifyingReason-new.component.scss']
})
export class QualifyingReasonNewComponent {
  @ViewChild("QualifyingReasonForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}