import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ClaimListComponent } from './components/atlas/claim-list/claim-list.component';
import { ClaimOverviewComponent } from './components/atlas/claim-overview/claim-overview.component';
import { GuruAppComponent } from './components/guru-app/guru-app/guru-app.component';
import { HomeComponent } from './components/home/home.component';
import { CompareComponent } from './components/policy-wise/compare/compare.component';
import { PolicyWiseComponent } from './components/policy-wise/policy/policy-wise.component';
import { EmailComponent } from './components/atlas/email/email.component';
import { PendingComponent } from './pending/pending.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'guru',
    component: GuruAppComponent,
    pathMatch: 'full',
  },
  {
    path: 'progress',
    component: PendingComponent,
    pathMatch: 'full',
  },
  {
    path: 'email',
    component: EmailComponent,
    pathMatch: 'full',
  },
  {
    path: 'policywise',
    children: [
      {
        path: 'selectPolicy',
        component: PolicyWiseComponent,
      },
      {
        path: 'compare',
        component: CompareComponent,
      },
    ],
  },
  {
    path: 'atlas',
    children: [
      {
        path: 'claimList',
        component: ClaimListComponent,
      },
      {
        path: 'claimOverview/:id',
        component: ClaimOverviewComponent,
      },
    ],
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
