import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CoffeePerfectPageComponent } from './coffee-perfect-page/coffee-perfect-page.component';

const routes: Routes = [
  { path: '', redirectTo: '/CoffeePerfect', pathMatch: 'full' },
  { path: 'CoffeePerfect', component: CoffeePerfectPageComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
