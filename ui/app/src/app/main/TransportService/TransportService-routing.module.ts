import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransportServiceHomeComponent } from './home/TransportService-home.component';
import { TransportServiceNewComponent } from './new/TransportService-new.component';
import { TransportServiceDetailComponent } from './detail/TransportService-detail.component';

const routes: Routes = [
  {path: '', component: TransportServiceHomeComponent},
  { path: 'new', component: TransportServiceNewComponent },
  { path: ':id', component: TransportServiceDetailComponent,
    data: {
      oPermission: {
        permissionId: 'TransportService-detail-permissions'
      }
    }
  },{
    path: ':service_id/Discount', loadChildren: () => import('../Discount/Discount.module').then(m => m.DiscountModule),
    data: {
        oPermission: {
            permissionId: 'Discount-detail-permissions'
        }
    }
},{
    path: ':service_id/Registration', loadChildren: () => import('../Registration/Registration.module').then(m => m.RegistrationModule),
    data: {
        oPermission: {
            permissionId: 'Registration-detail-permissions'
        }
    }
},{
    path: ':service_id/ServiceDriver', loadChildren: () => import('../ServiceDriver/ServiceDriver.module').then(m => m.ServiceDriverModule),
    data: {
        oPermission: {
            permissionId: 'ServiceDriver-detail-permissions'
        }
    }
},{
    path: ':service_id/ServiceSchedule', loadChildren: () => import('../ServiceSchedule/ServiceSchedule.module').then(m => m.ServiceScheduleModule),
    data: {
        oPermission: {
            permissionId: 'ServiceSchedule-detail-permissions'
        }
    }
},{
    path: ':service_id/ServiceUsageHistory', loadChildren: () => import('../ServiceUsageHistory/ServiceUsageHistory.module').then(m => m.ServiceUsageHistoryModule),
    data: {
        oPermission: {
            permissionId: 'ServiceUsageHistory-detail-permissions'
        }
    }
}
];

export const TRANSPORTSERVICE_MODULE_DECLARATIONS = [
    TransportServiceHomeComponent,
    TransportServiceNewComponent,
    TransportServiceDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransportServiceRoutingModule { }