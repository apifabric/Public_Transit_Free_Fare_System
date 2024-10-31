import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {TRANSPORTSERVICE_MODULE_DECLARATIONS, TransportServiceRoutingModule} from  './TransportService-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    TransportServiceRoutingModule
  ],
  declarations: TRANSPORTSERVICE_MODULE_DECLARATIONS,
  exports: TRANSPORTSERVICE_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class TransportServiceModule { }