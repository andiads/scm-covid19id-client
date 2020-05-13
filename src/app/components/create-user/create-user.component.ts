import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { User } from '../../models/user';
import { Roles } from '../../models/roles';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-create-user',
  templateUrl: './create-user.component.html',
  styleUrls: ['./create-user.component.css']
})
export class CreateUserComponent implements OnInit {

  user: User = new User();
  roles: Observable<Roles[]>;
  submitted = false;

  constructor(
    private userService: UserService, 
    private adminService: AdminService,
    private router: Router) { }

  ngOnInit() {
    this.loadListRoles();
  }

  loadListRoles() {
    this.roles = this.adminService.getRolesList();
  }

  newUser(): void {
    this.submitted =false;
    this.user = new User();
  }

  save() {
    this.userService.createUser(this.user)
      .subscribe(
        data => console.log(data), 
        error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  gotoList() {
    this.router.navigate(['users']);
  }
}
