import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CitizenFeedbackHomeComponent } from './home/CitizenFeedback-home.component';
import { CitizenFeedbackNewComponent } from './new/CitizenFeedback-new.component';
import { CitizenFeedbackDetailComponent } from './detail/CitizenFeedback-detail.component';

const routes: Routes = [
  {path: '', component: CitizenFeedbackHomeComponent},
  { path: 'new', component: CitizenFeedbackNewComponent },
  { path: ':id', component: CitizenFeedbackDetailComponent,
    data: {
      oPermission: {
        permissionId: 'CitizenFeedback-detail-permissions'
      }
    }
  }
];

export const CITIZENFEEDBACK_MODULE_DECLARATIONS = [
    CitizenFeedbackHomeComponent,
    CitizenFeedbackNewComponent,
    CitizenFeedbackDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CitizenFeedbackRoutingModule { }