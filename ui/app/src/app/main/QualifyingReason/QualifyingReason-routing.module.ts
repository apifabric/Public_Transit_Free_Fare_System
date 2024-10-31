import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QualifyingReasonHomeComponent } from './home/QualifyingReason-home.component';
import { QualifyingReasonNewComponent } from './new/QualifyingReason-new.component';
import { QualifyingReasonDetailComponent } from './detail/QualifyingReason-detail.component';

const routes: Routes = [
  {path: '', component: QualifyingReasonHomeComponent},
  { path: 'new', component: QualifyingReasonNewComponent },
  { path: ':id', component: QualifyingReasonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'QualifyingReason-detail-permissions'
      }
    }
  },{
    path: ':qualifying_reason_id/CitizenQualifyingReason', loadChildren: () => import('../CitizenQualifyingReason/CitizenQualifyingReason.module').then(m => m.CitizenQualifyingReasonModule),
    data: {
        oPermission: {
            permissionId: 'CitizenQualifyingReason-detail-permissions'
        }
    }
}
];

export const QUALIFYINGREASON_MODULE_DECLARATIONS = [
    QualifyingReasonHomeComponent,
    QualifyingReasonNewComponent,
    QualifyingReasonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class QualifyingReasonRoutingModule { }