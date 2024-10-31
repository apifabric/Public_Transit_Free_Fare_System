import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'ServiceDriver-new',
  templateUrl: './ServiceDriver-new.component.html',
  styleUrls: ['./ServiceDriver-new.component.scss']
})
export class ServiceDriverNewComponent {
  @ViewChild("ServiceDriverForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}