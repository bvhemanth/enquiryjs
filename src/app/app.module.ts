import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingPageComponent } from './components/landing-page/landing-page.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FiltersPipe } from './pipes/filters.pipe';
import { CardComponent } from './common/card/card.component';
import { PaginationComponent } from './common/pagination/pagination.component';
@NgModule({
  declarations: [
    AppComponent,
    LandingPageComponent,
    FiltersPipe,
    CardComponent,
    PaginationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
