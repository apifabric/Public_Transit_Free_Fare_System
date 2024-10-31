import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {SERVICEUSAGEHISTORY_MODULE_DECLARATIONS, ServiceUsageHistoryRoutingModule} from  './ServiceUsageHistory-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    ServiceUsageHistoryRoutingModule
  ],
  declarations: SERVICEUSAGEHISTORY_MODULE_DECLARATIONS,
  exports: SERVICEUSAGEHISTORY_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class ServiceUsageHistoryModule { }