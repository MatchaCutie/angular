import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MissionComponent } from './mission/app.mission.component';
import { HomeComponent } from './home/app.home.component';
import { TestComponent } from './test/app.test.component';
import { SubscriptionComponent } from './subcription/app.subscription.conponent';
import { PreloadAllModules } from '@angular/router'

const routes: Routes = [
  { path: '', redirectTo: '/app', pathMatch: 'full' },
  { path: 'app', component: HomeComponent },
  { path: 'mission', component: MissionComponent },
  { path: 'test/:id', component: TestComponent },
  { path: 'subscription', component: SubscriptionComponent },
  { path: 'customers', loadChildren: () => import('./customers/customers.module').then(m => m.CustomersModule),
    data: {
      reloadingStrategy: PreloadAllModules
    }
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [],
  bootstrap: []
})
export class AppRoutingModule { }
