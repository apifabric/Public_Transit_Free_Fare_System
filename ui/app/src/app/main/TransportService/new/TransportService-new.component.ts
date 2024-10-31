import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'TransportService-new',
  templateUrl: './TransportService-new.component.html',
  styleUrls: ['./TransportService-new.component.scss']
})
export class TransportServiceNewComponent {
  @ViewChild("TransportServiceForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}