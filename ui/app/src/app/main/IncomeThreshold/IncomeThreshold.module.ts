import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {INCOMETHRESHOLD_MODULE_DECLARATIONS, IncomeThresholdRoutingModule} from  './IncomeThreshold-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    IncomeThresholdRoutingModule
  ],
  declarations: INCOMETHRESHOLD_MODULE_DECLARATIONS,
  exports: INCOMETHRESHOLD_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class IncomeThresholdModule { }