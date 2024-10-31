import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {CITIZEN_MODULE_DECLARATIONS, CitizenRoutingModule} from  './Citizen-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    CitizenRoutingModule
  ],
  declarations: CITIZEN_MODULE_DECLARATIONS,
  exports: CITIZEN_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CitizenModule { }