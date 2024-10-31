import { Component, Injector, ViewChild } from '@angular/core';
import { NavigationService, OFormComponent } from 'ontimize-web-ngx';

@Component({
  selector: 'Citizen-new',
  templateUrl: './Citizen-new.component.html',
  styleUrls: ['./Citizen-new.component.scss']
})
export class CitizenNewComponent {
  @ViewChild("CitizenForm") form: OFormComponent;
  onInsertMode() {
    const default_values = {}
    this.form.setFieldValues(default_values);
  }
  constructor(protected injector: Injector) {
    this.injector.get(NavigationService).initialize();
  }
}