import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'CitizenFeedback-new',
  templateUrl: './CitizenFeedback-new.component.html',
  styleUrls: ['./CitizenFeedback-new.component.scss']
})
export class CitizenFeedbackNewComponent {
  @ViewChild("CitizenFeedbackForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}