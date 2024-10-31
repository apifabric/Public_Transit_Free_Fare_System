import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MainComponent } from './main.component';

export const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
        { path: '', redirectTo: 'home', pathMatch: 'full' },
        { path: 'about', loadChildren: () => import('./about/about.module').then(m => m.AboutModule) },
        { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
        { path: 'settings', loadChildren: () => import('./settings/settings.module').then(m => m.SettingsModule) },
      
    
        { path: 'Citizen', loadChildren: () => import('./Citizen/Citizen.module').then(m => m.CitizenModule) },
    
        { path: 'CitizenFeedback', loadChildren: () => import('./CitizenFeedback/CitizenFeedback.module').then(m => m.CitizenFeedbackModule) },
    
        { path: 'CitizenQualifyingReason', loadChildren: () => import('./CitizenQualifyingReason/CitizenQualifyingReason.module').then(m => m.CitizenQualifyingReasonModule) },
    
        { path: 'Discount', loadChildren: () => import('./Discount/Discount.module').then(m => m.DiscountModule) },
    
        { path: 'Driver', loadChildren: () => import('./Driver/Driver.module').then(m => m.DriverModule) },
    
        { path: 'IncomeThreshold', loadChildren: () => import('./IncomeThreshold/IncomeThreshold.module').then(m => m.IncomeThresholdModule) },
    
        { path: 'QualifyingReason', loadChildren: () => import('./QualifyingReason/QualifyingReason.module').then(m => m.QualifyingReasonModule) },
    
        { path: 'Registration', loadChildren: () => import('./Registration/Registration.module').then(m => m.RegistrationModule) },
    
        { path: 'ServiceDriver', loadChildren: () => import('./ServiceDriver/ServiceDriver.module').then(m => m.ServiceDriverModule) },
    
        { path: 'ServiceSchedule', loadChildren: () => import('./ServiceSchedule/ServiceSchedule.module').then(m => m.ServiceScheduleModule) },
    
        { path: 'ServiceUsageHistory', loadChildren: () => import('./ServiceUsageHistory/ServiceUsageHistory.module').then(m => m.ServiceUsageHistoryModule) },
    
        { path: 'TransportService', loadChildren: () => import('./TransportService/TransportService.module').then(m => m.TransportServiceModule) },
    
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule { }