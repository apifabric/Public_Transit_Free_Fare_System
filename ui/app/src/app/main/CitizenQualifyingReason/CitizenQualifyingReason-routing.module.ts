import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenQualifyingReasonHomeComponent } from './home/CitizenQualifyingReason-home.component';
import { CitizenQualifyingReasonNewComponent } from './new/CitizenQualifyingReason-new.component';
import { CitizenQualifyingReasonDetailComponent } from './detail/CitizenQualifyingReason-detail.component';

const routes: Routes = [
  {path: '', component: CitizenQualifyingReasonHomeComponent},
  { path: 'new', component: CitizenQualifyingReasonNewComponent },
  { path: ':id', component: CitizenQualifyingReasonDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CitizenQualifyingReason-detail-permissions'
      }
    }
  }
];

export const CITIZENQUALIFYINGREASON_MODULE_DECLARATIONS = [
    CitizenQualifyingReasonHomeComponent,
    CitizenQualifyingReasonNewComponent,
    CitizenQualifyingReasonDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenQualifyingReasonRoutingModule { }