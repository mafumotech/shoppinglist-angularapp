import { BrowserModule } from '@angular/platform-browser';
import { LOCALE_ID, NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import localePtMz from '@angular/common/locales/pt';
import { AppComponent } from './app.component';
import { SharedModule } from './shared/shared.module';
import { DashboardComponent } from './pages/ui/dashboard/dashboard.component';
import { registerLocaleData } from '@angular/common';

registerLocaleData(localePtMz,'pt-MZ')

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    SharedModule
  ],
  providers: [{provide:LOCALE_ID,useValue:'pt-MZ'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
