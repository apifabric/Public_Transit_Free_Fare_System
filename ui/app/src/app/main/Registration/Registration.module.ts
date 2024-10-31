import {CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { OntimizeWebModule } from 'ontimize-web-ngx';
import { SharedModule } from '../../shared/shared.module';
import  {REGISTRATION_MODULE_DECLARATIONS, RegistrationRoutingModule} from  './Registration-routing.module';

@NgModule({

  imports: [
    SharedModule,
    CommonModule,
    OntimizeWebModule,
    RegistrationRoutingModule
  ],
  declarations: REGISTRATION_MODULE_DECLARATIONS,
  exports: REGISTRATION_MODULE_DECLARATIONS,
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class RegistrationModule { }