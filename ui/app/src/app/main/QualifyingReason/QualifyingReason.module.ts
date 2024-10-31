import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {QUALIFYINGREASON_MODULE_DECLARATIONS, QualifyingReasonRoutingModule} from  './QualifyingReason-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    QualifyingReasonRoutingModule
  ],
  declarations: QUALIFYINGREASON_MODULE_DECLARATIONS,
  exports: QUALIFYINGREASON_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QualifyingReasonModule { }