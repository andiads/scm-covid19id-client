import { Component, OnInit } from '@angular/core';
import { User } from '../../models/user';
import { Roles } from '../../models/roles';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../services/user.service';
import { AdminService } from '../../services/admin.service';
import { Observable } from 'rxjs';
import { FormBuilder, FormGroup, FormArray, FormControl, ValidatorFn } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  form: FormGroup;
  id: number;
  user: User;
  roles: Observable<Roles[]>;
  submitted = false;

  constructor(
    private route: ActivatedRoute, 
    private router: Router,
    private formBuilder: FormBuilder,
    private userService: UserService,
    private adminService: AdminService
  ) {
    this.form = this.formBuilder.group({
      roles: this.adminService.getRolesList()
    });
   }

  ngOnInit() {

    this.user = new User();
    this.id = this.route.snapshot.params['id'];

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.user = data;
      }, error => console.log(error));
  }

  loadListRoles() {
    this.roles = this.adminService.getRolesList();
  }

  updateUser() {
    this.userService.updateUser(this.id, this.user)
      .subscribe(data => console.log(data), error => console.log(error));
    this.user = new User();
    this.gotoList();
  }

  onSubmit() {
    this.submitted = true;
    this.updateUser();
  }

  gotoList() {
    this.router.navigate(['users']);
  }

}
