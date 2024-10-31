import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IncomeThresholdHomeComponent } from './home/IncomeThreshold-home.component';
import { IncomeThresholdNewComponent } from './new/IncomeThreshold-new.component';
import { IncomeThresholdDetailComponent } from './detail/IncomeThreshold-detail.component';

const routes: Routes = [
  {path: '', component: IncomeThresholdHomeComponent},
  { path: 'new', component: IncomeThresholdNewComponent },
  { path: ':id', component: IncomeThresholdDetailComponent,
    data: {
      oPermission: {
        permissionId: 'IncomeThreshold-detail-permissions'
      }
    }
  }
];

export const INCOMETHRESHOLD_MODULE_DECLARATIONS = [
    IncomeThresholdHomeComponent,
    IncomeThresholdNewComponent,
    IncomeThresholdDetailComponent 
];


@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class IncomeThresholdRoutingModule { }