import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AboutRoutingModule } from './about-routing.module';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JourneySoFarComponent } from './journey-so-far/journey-so-far.component';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { CompanyPoliciesComponent } from './company-policies/company-policies.component';


@NgModule({
  declarations: [
    CompanyProfileComponent,
    JourneySoFarComponent,
    BoardOfDirectorsComponent,
    CompanyPoliciesComponent
  ],
  imports: [
    CommonModule,
    AboutRoutingModule
  ]
})
export class AboutModule { }
