import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { CompareComponent } from './components/policy-wise/compare/compare.component';
import { PolicyWiseComponent } from './components/policy-wise/policy/policy-wise.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  {
    path: 'home',
    component: HomeComponent,
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
