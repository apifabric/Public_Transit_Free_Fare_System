import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceSchedule-new',
  templateUrl: './ServiceSchedule-new.component.html',
  styleUrls: ['./ServiceSchedule-new.component.scss']
})
export class ServiceScheduleNewComponent {
  @ViewChild("ServiceScheduleForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}