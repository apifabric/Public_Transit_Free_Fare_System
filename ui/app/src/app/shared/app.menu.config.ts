import { MenuRootItem } from 'ontimize-web-ngx';

import { CitizenCardComponent } from './Citizen-card/Citizen-card.component';

import { CitizenFeedbackCardComponent } from './CitizenFeedback-card/CitizenFeedback-card.component';

import { CitizenQualifyingReasonCardComponent } from './CitizenQualifyingReason-card/CitizenQualifyingReason-card.component';

import { DiscountCardComponent } from './Discount-card/Discount-card.component';

import { DriverCardComponent } from './Driver-card/Driver-card.component';

import { IncomeThresholdCardComponent } from './IncomeThreshold-card/IncomeThreshold-card.component';

import { QualifyingReasonCardComponent } from './QualifyingReason-card/QualifyingReason-card.component';

import { RegistrationCardComponent } from './Registration-card/Registration-card.component';

import { ServiceDriverCardComponent } from './ServiceDriver-card/ServiceDriver-card.component';

import { ServiceScheduleCardComponent } from './ServiceSchedule-card/ServiceSchedule-card.component';

import { ServiceUsageHistoryCardComponent } from './ServiceUsageHistory-card/ServiceUsageHistory-card.component';

import { TransportServiceCardComponent } from './TransportService-card/TransportService-card.component';


export const MENU_CONFIG: MenuRootItem[] = [
    { id: 'home', name: 'HOME', icon: 'home', route: '/main/home' },
    
    {
    id: 'data', name: ' data', icon: 'remove_red_eye', opened: true,
    items: [
    
        { id: 'Citizen', name: 'CITIZEN', icon: 'view_list', route: '/main/Citizen' }
    
        ,{ id: 'CitizenFeedback', name: 'CITIZENFEEDBACK', icon: 'view_list', route: '/main/CitizenFeedback' }
    
        ,{ id: 'CitizenQualifyingReason', name: 'CITIZENQUALIFYINGREASON', icon: 'view_list', route: '/main/CitizenQualifyingReason' }
    
        ,{ id: 'Discount', name: 'DISCOUNT', icon: 'view_list', route: '/main/Discount' }
    
        ,{ id: 'Driver', name: 'DRIVER', icon: 'view_list', route: '/main/Driver' }
    
        ,{ id: 'IncomeThreshold', name: 'INCOMETHRESHOLD', icon: 'view_list', route: '/main/IncomeThreshold' }
    
        ,{ id: 'QualifyingReason', name: 'QUALIFYINGREASON', icon: 'view_list', route: '/main/QualifyingReason' }
    
        ,{ id: 'Registration', name: 'REGISTRATION', icon: 'view_list', route: '/main/Registration' }
    
        ,{ id: 'ServiceDriver', name: 'SERVICEDRIVER', icon: 'view_list', route: '/main/ServiceDriver' }
    
        ,{ id: 'ServiceSchedule', name: 'SERVICESCHEDULE', icon: 'view_list', route: '/main/ServiceSchedule' }
    
        ,{ id: 'ServiceUsageHistory', name: 'SERVICEUSAGEHISTORY', icon: 'view_list', route: '/main/ServiceUsageHistory' }
    
        ,{ id: 'TransportService', name: 'TRANSPORTSERVICE', icon: 'view_list', route: '/main/TransportService' }
    
    ] 
},
    
    { id: 'settings', name: 'Settings', icon: 'settings', route: '/main/settings'}
    ,{ id: 'about', name: 'About', icon: 'info', route: '/main/about'}
    ,{ id: 'logout', name: 'LOGOUT', route: '/login', icon: 'power_settings_new', confirm: 'yes' }
];

export const MENU_COMPONENTS = [

    CitizenCardComponent

    ,CitizenFeedbackCardComponent

    ,CitizenQualifyingReasonCardComponent

    ,DiscountCardComponent

    ,DriverCardComponent

    ,IncomeThresholdCardComponent

    ,QualifyingReasonCardComponent

    ,RegistrationCardComponent

    ,ServiceDriverCardComponent

    ,ServiceScheduleCardComponent

    ,ServiceUsageHistoryCardComponent

    ,TransportServiceCardComponent

];