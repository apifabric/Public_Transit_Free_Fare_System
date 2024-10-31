import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ServiceUsageHistoryHomeComponent } from './home/ServiceUsageHistory-home.component';
import { ServiceUsageHistoryNewComponent } from './new/ServiceUsageHistory-new.component';
import { ServiceUsageHistoryDetailComponent } from './detail/ServiceUsageHistory-detail.component';

const routes: Routes = [
  {path: '', component: ServiceUsageHistoryHomeComponent},
  { path: 'new', component: ServiceUsageHistoryNewComponent },
  { path: ':id', component: ServiceUsageHistoryDetailComponent,
    data: {
      oPermission: {
        permissionId: 'ServiceUsageHistory-detail-permissions'
      }
    }
  }
];

export const SERVICEUSAGEHISTORY_MODULE_DECLARATIONS = [
    ServiceUsageHistoryHomeComponent,
    ServiceUsageHistoryNewComponent,
    ServiceUsageHistoryDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServiceUsageHistoryRoutingModule { }