import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BoardOfDirectorsComponent } from './board-of-directors/board-of-directors.component';
import { CompanyPoliciesComponent } from './company-policies/company-policies.component';
import { CompanyProfileComponent } from './company-profile/company-profile.component';
import { JourneySoFarComponent } from './journey-so-far/journey-so-far.component';

const routes: Routes = [
  { path: 'about/board-of-directors', component:BoardOfDirectorsComponent },
  { path: 'about/company-policies', component:CompanyPoliciesComponent },
  { path: 'about/company-profile', component: CompanyProfileComponent },
  { path: 'about/journey-so-far', component: JourneySoFarComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AboutRoutingModule { }
