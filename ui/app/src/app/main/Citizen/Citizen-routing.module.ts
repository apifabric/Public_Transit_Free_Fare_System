import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenHomeComponent } from './home/Citizen-home.component';
import { CitizenNewComponent } from './new/Citizen-new.component';
import { CitizenDetailComponent } from './detail/Citizen-detail.component';

const routes: Routes = [
  {path: '', component: CitizenHomeComponent},
  { path: 'new', component: CitizenNewComponent },
  { path: ':id', component: CitizenDetailComponent,
    data: {
      oPermission: {
        permissionId: 'Citizen-detail-permissions'
      }
    }
  },{
    path: ':citizen_id/CitizenFeedback', loadChildren: () => import('../CitizenFeedback/CitizenFeedback.module').then(m => m.CitizenFeedbackModule),
    data: {
        oPermission: {
            permissionId: 'CitizenFeedback-detail-permissions'
        }
    }
},{
    path: ':citizen_id/CitizenQualifyingReason', loadChildren: () => import('../CitizenQualifyingReason/CitizenQualifyingReason.module').then(m => m.CitizenQualifyingReasonModule),
    data: {
        oPermission: {
            permissionId: 'CitizenQualifyingReason-detail-permissions'
        }
    }
},{
    path: ':citizen_id/Registration', loadChildren: () => import('../Registration/Registration.module').then(m => m.RegistrationModule),
    data: {
        oPermission: {
            permissionId: 'Registration-detail-permissions'
        }
    }
},{
    path: ':citizen_id/ServiceUsageHistory', loadChildren: () => import('../ServiceUsageHistory/ServiceUsageHistory.module').then(m => m.ServiceUsageHistoryModule),
    data: {
        oPermission: {
            permissionId: 'ServiceUsageHistory-detail-permissions'
        }
    }
}
];

export const CITIZEN_MODULE_DECLARATIONS = [
    CitizenHomeComponent,
    CitizenNewComponent,
    CitizenDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenRoutingModule { }