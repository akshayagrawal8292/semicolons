import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { GuruAppComponent } from './components/guru-app/guru-app/guru-app.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' ,
},
{
  path: 'home',
  component: HomeComponent,
  pathMatch: 'full'
},
{
  path: 'guru',
  component: GuruAppComponent,
  pathMatch: 'full'
},]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

 }
