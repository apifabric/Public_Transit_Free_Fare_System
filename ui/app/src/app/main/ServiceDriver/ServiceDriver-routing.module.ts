import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceDriverHomeComponent } from './home/ServiceDriver-home.component';
import { ServiceDriverNewComponent } from './new/ServiceDriver-new.component';
import { ServiceDriverDetailComponent } from './detail/ServiceDriver-detail.component';

const routes: Routes = [
  {path: '', component: ServiceDriverHomeComponent},
  { path: 'new', component: ServiceDriverNewComponent },
  { path: ':id', component: ServiceDriverDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceDriver-detail-permissions'
      }
    }
  }
];

export const SERVICEDRIVER_MODULE_DECLARATIONS = [
    ServiceDriverHomeComponent,
    ServiceDriverNewComponent,
    ServiceDriverDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceDriverRoutingModule { }