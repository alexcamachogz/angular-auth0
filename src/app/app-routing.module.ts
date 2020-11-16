import { NgModule } from '@angular/core'
import { Routes, RouterModule } from '@angular/router'
import { HomeComponent } from './components/home/home.component'
import { PricesComponent } from './components/prices/prices.component'
import { ProtectedComponent } from './components/protected/protected.component'

const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'prices', component: PricesComponent },
  { path: 'protected', component: ProtectedComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
