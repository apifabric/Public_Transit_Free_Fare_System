import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Registration-new',
  templateUrl: './Registration-new.component.html',
  styleUrls: ['./Registration-new.component.scss']
})
export class RegistrationNewComponent {
  @ViewChild("RegistrationForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}