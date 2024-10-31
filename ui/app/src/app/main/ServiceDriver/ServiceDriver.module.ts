import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEDRIVER_MODULE_DECLARATIONS, ServiceDriverRoutingModule} from  './ServiceDriver-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceDriverRoutingModule
  ],
  declarations: SERVICEDRIVER_MODULE_DECLARATIONS,
  exports: SERVICEDRIVER_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceDriverModule { }