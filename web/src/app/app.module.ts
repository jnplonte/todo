import { NgModule } from '@angular/core';
import { BrowserModule, Title } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { Observable } from 'rxjs/Observable';
import { MATERIAL_SANITY_CHECKS } from '@angular/material';

import { MaterialModule } from './material.module';

import { AppComponent } from './app.component';

import { HelperService } from './services/helper/helper.service';
import { AlertService } from './services/alert/alert.service';

import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { AlertComponent } from './components/alert/alert.component';
import { ToolbarComponent } from './components/toolbar/toolbar.component';


const appRoutes: Routes = [
    { path: '', component: DashboardComponent, data: {title: 'Todo List Dashboard'}},

    { path: '**', component: PageNotFoundComponent, data: {title: 'Page Not Found'} }
];

@NgModule({
  imports:      [ BrowserAnimationsModule,
                  BrowserModule,
                  MaterialModule,
                  HttpClientModule,
                  FormsModule,
                  ReactiveFormsModule,
                  HttpClientModule,
                  RouterModule.forRoot(appRoutes, { useHash: true }) ],
  declarations: [ AppComponent,
                  PageNotFoundComponent,
                  DashboardComponent,
                  AlertComponent,
                  ToolbarComponent
                ],
  providers:    [ Title,
                  { provide: MATERIAL_SANITY_CHECKS,  useValue: false },
                  { provide: 'helperService', useClass: HelperService },
                  { provide: 'alertService', useClass: AlertService }
                ],
  bootstrap:    [ AppComponent ]
})

export class AppModule { }
