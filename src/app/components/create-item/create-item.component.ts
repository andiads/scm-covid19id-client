import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { Router } from '@angular/router';
import { Items } from '../../models/items';

@Component({
  selector: 'app-create-item',
  templateUrl: './create-item.component.html',
  styleUrls: ['./create-item.component.css']
})
export class CreateItemComponent implements OnInit {

  item: Items = new Items();
  submitted = false;

  constructor(
    private userService: UserService,
    private router: Router) { }

  ngOnInit(): void {
  }

  newItem(): void {
    this.submitted = false;
    this.item = new Items();
  }

  save() {
    this.userService.createItem(this.item)
      .subscribe(
        data => console.log(data),
        error => console.log(error)
      );
      this.item = new Items();
      this.goToList();
  }

  onSubmit() {
    this.submitted = true;
    this.save();
  }

  goToList() {
    this.router.navigate(['items']);
  }

}
