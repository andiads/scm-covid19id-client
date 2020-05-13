import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserDetailsComponent } from './components/user-details/user-details.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    CreateUserComponent,
    UserDetailsComponent,
    UserListComponent,
    UpdateUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
