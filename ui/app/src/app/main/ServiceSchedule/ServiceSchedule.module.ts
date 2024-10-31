import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICESCHEDULE_MODULE_DECLARATIONS, ServiceScheduleRoutingModule} from  './ServiceSchedule-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceScheduleRoutingModule
  ],
  declarations: SERVICESCHEDULE_MODULE_DECLARATIONS,
  exports: SERVICESCHEDULE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceScheduleModule { }