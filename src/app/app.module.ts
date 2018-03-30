
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// Rutas

import { APP_ROUTES } from './app.routes';

// Module

import { PageModule } from './pages/pages.module';


// temporal
import { FormsModule } from '@angular/forms';

// Componentes
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './login/register.component';







@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    RegisterComponent
    // DashboardComponent,
    // ProgressComponent,
    // Graficas1Component,
    // PagesComponent,
    // NopagefoundComponent,
    // HeaderComponent,
    // SidebarComponent,
    // BreadcrumbsComponent
  ],
  imports: [
    BrowserModule,
    APP_ROUTES,
    PageModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
