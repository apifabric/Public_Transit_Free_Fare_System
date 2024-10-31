import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceScheduleHomeComponent } from './home/ServiceSchedule-home.component';
import { ServiceScheduleNewComponent } from './new/ServiceSchedule-new.component';
import { ServiceScheduleDetailComponent } from './detail/ServiceSchedule-detail.component';

const routes: Routes = [
  {path: '', component: ServiceScheduleHomeComponent},
  { path: 'new', component: ServiceScheduleNewComponent },
  { path: ':id', component: ServiceScheduleDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceSchedule-detail-permissions'
      }
    }
  }
];

export const SERVICESCHEDULE_MODULE_DECLARATIONS = [
    ServiceScheduleHomeComponent,
    ServiceScheduleNewComponent,
    ServiceScheduleDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceScheduleRoutingModule { }