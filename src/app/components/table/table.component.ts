import { UsersService } from '../../services/user.services';
import { Users } from './demo/user';
import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrl: './table.component.css'
})
export class TableComponent implements OnInit {
  User!: Users[];
  constructor(private productService: UsersService) { }
  ngOnInit() {
    this.productService.getProducts().then((data) => {
      this.User = data;
    });
  }
 
}
