import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'
import { NabvarComponent } from './components/nabvar/nabvar.component'
import { HomeComponent } from './components/home/home.component'
import { ProtectedComponent } from './components/protected/protected.component'
import { PricesComponent } from './components/prices/prices.component'

// Import the module from the SDK
import { AuthModule } from '@auth0/auth0-angular'

@NgModule({
  declarations: [
    AppComponent,
    NabvarComponent,
    HomeComponent,
    ProtectedComponent,
    PricesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule.forRoot({
      domain: 'alexcamachogz.us.auth0.com',
      clientId: 'CaZqoWGh6gWfgKcClPfEeepbaabfE3nh'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
