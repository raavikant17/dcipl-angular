import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BusinessIntelligenceServicesComponent } from './business-intelligence-services/business-intelligence-services.component';
import { EnterpriseApplicationServicesComponent } from './enterprise-application-services/enterprise-application-services.component';
import { ItEnabledServicesComponent } from './it-enabled-services/it-enabled-services.component';
import { ManagedServicesComponent } from './managed-services/managed-services.component';

const routes: Routes = [
  { path: 'services/enterprise-application-services', component: EnterpriseApplicationServicesComponent },
  { path: 'services/managed-services', component: ManagedServicesComponent },
  { path: 'services/it-enabled-services', component: ItEnabledServicesComponent },
  { path: 'services/business-intelligence-services', component: BusinessIntelligenceServicesComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ServicesRoutingModule { }
