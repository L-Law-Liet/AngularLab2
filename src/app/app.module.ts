import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AddRecordComponent } from './add-record/add-record.component';
import { ResultsComponent } from './results/results.component';
import { ResultsHeaderComponent } from './results/results-header/results-header.component';
import { ResultsBodyComponent } from './results/results-body/results-body.component';

@NgModule({
  declarations: [
    AppComponent,
    AddRecordComponent,
    ResultsComponent,
    ResultsHeaderComponent,
    ResultsBodyComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
