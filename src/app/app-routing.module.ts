import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home-rtl/home.component';
import { HomeLtrComponent } from './pages/home-ltr/home-ltr.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home-ltr', component: HomeLtrComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
