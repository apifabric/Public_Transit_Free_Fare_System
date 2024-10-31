import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CITIZENQUALIFYINGREASON_MODULE_DECLARATIONS, CitizenQualifyingReasonRoutingModule} from  './CitizenQualifyingReason-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CitizenQualifyingReasonRoutingModule
  ],
  declarations: CITIZENQUALIFYINGREASON_MODULE_DECLARATIONS,
  exports: CITIZENQUALIFYINGREASON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CitizenQualifyingReasonModule { }