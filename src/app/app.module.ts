import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ReactiveFormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';
import { RouterModule, Routes } from '@angular/router';

import { CustomMaterialModule } from './app-material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PredatorPreyComponent } from './predator-prey/predator-prey.component';
import { PopulationChartComponent } from './predator-prey/population-chart/population-chart.component';
import { FuzzyComponent } from './fuzzy/fuzzy.component';
import { HomeComponent } from './home/home.component';
import { FuzzyChartComponent } from './fuzzy/fuzzy-chart/fuzzy-chart.component';


const appRouts: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'predpray', component: PredatorPreyComponent},
  {path: 'fuzzy', component: FuzzyComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', redirectTo: '/home'}
];


@NgModule({
  declarations: [
    AppComponent,
    PredatorPreyComponent,
    PopulationChartComponent,
    FuzzyComponent,
    HomeComponent,
    FuzzyChartComponent
  ],
  imports: [
    RouterModule.forRoot(appRouts),
    BrowserModule,
    FormsModule,
    HttpModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    CustomMaterialModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
