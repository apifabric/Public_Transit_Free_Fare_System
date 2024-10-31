import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CITIZENFEEDBACK_MODULE_DECLARATIONS, CitizenFeedbackRoutingModule} from  './CitizenFeedback-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CitizenFeedbackRoutingModule
  ],
  declarations: CITIZENFEEDBACK_MODULE_DECLARATIONS,
  exports: CITIZENFEEDBACK_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CitizenFeedbackModule { }