import { Component, OnInit } from '@angular/core';
import { Items } from '../../models/items';
import { UserService } from '../../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.css']
})
export class ItemsListComponent implements OnInit {

  items: Observable<Items[]>;
  itemGet: Items;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private userService: UserService,
    private router: Router
  ) { }

  ngOnInit() {
    this.reloadItemsData();
  }

  reloadItemsData() {
    this.items = this.userService.getAvailableItemsList();
  }

  itemDetails(id: number) {
    this.router.navigate(['details', id]);
  }

  updateItem(id: number) {
    this.router.navigate(['update', id]);
  }

  deleteItem(id: number) {
    this.id = this.route.snapshot.params.id;

    this.userService.getUser(this.id)
      .subscribe(data => {
        console.log(data)
        this.itemGet = data;
      }, error => console.log(error));

    this.userService.deleteItem(this.id, this.itemGet)
      .subscribe(
        data => {
          console.log(data);
          this.reloadItemsData();
        },
        error => console.log(error));
  }

}
