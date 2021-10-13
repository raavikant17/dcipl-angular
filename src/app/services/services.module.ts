import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ServicesRoutingModule } from './services-routing.module';
import { EnterpriseApplicationServicesComponent } from './enterprise-application-services/enterprise-application-services.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';
import { ItEnabledServicesComponent } from './it-enabled-services/it-enabled-services.component';
import { BusinessIntelligenceServicesComponent } from './business-intelligence-services/business-intelligence-services.component';


@NgModule({
  declarations: [
    EnterpriseApplicationServicesComponent,
    ManagedServicesComponent,
    ItEnabledServicesComponent,
    BusinessIntelligenceServicesComponent
  ],
  imports: [
    CommonModule,
    ServicesRoutingModule
  ]
})
export class ServicesModule { }
