import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { UserDetailsComponent } from './components/user-details/user-details.component';
import { CreateUserComponent } from './components/create-user/create-user.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { UpdateUserComponent } from './components/update-user/update-user.component';

import { ItemsListComponent } from './components/items-list/items-list.component';
import { CreateItemComponent } from './components/create-item/create-item.component';


const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' },
  { path: 'users', component: UserListComponent },
  { path: 'items', component: ItemsListComponent },
  { path: 'items/add', component: CreateItemComponent },
  { path: 'users/add', component: CreateUserComponent },
  { path: 'update/:id', component: UpdateUserComponent },
  { path: 'details/:id', component: UserDetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
