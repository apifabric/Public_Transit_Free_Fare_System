import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationHomeComponent } from './home/Registration-home.component';
import { RegistrationNewComponent } from './new/Registration-new.component';
import { RegistrationDetailComponent } from './detail/Registration-detail.component';

const routes: Routes = [
  {path: '', component: RegistrationHomeComponent},
  { path: 'new', component: RegistrationNewComponent },
  { path: ':id', component: RegistrationDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Registration-detail-permissions'
      }
    }
  }
];

export const REGISTRATION_MODULE_DECLARATIONS = [
    RegistrationHomeComponent,
    RegistrationNewComponent,
    RegistrationDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class RegistrationRoutingModule { }