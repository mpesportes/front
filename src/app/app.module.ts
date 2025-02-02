import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from '#/app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceWorkerModule } from '@angular/service-worker';
import { MaterialModule } from '#/material.module';
import { CookieService } from 'ngx-cookie-service';

import { AppComponent } from '#/app.component';
import { environment } from '##/environments/environment';

import { MenuComponent } from '$/menu/menu.component';
import { UserComponent } from '$/user/user/user.component';
import { UserLoginComponent } from '$/user/user-login/user-login.component';
import { TracksComponent } from '$/tracks/tracks/tracks.component';
import { DashboardComponent } from '$/dashboard/dashboard.component';
import { ToolbarComponent } from '$/toolbar/toolbar.component';
import { UserLogoutComponent } from './components/user/user-logout/user-logout.component';
import { AthletesComponent } from './components/athletes/athletes/athletes.component';
import { CreateAthleteComponent } from './components/athletes/create-athlete/create-athlete.component';
import { RegisterAthleteComponent } from './components/athletes/register-athlete/register-athlete.component';
import { DeleteAthleteComponent } from './components/athletes/delete-athlete/delete-athlete.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    ToolbarComponent,
    UserComponent,
    UserLoginComponent,
    TracksComponent,
    DashboardComponent,
    UserLogoutComponent,
    AthletesComponent,
    CreateAthleteComponent,
    RegisterAthleteComponent,
    DeleteAthleteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    ReactiveFormsModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production })
  ],
  entryComponents: [
    UserLoginComponent,
    UserLogoutComponent
  ],
  providers: [CookieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
