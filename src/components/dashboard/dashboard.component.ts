import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { User } from 'src/dataType/interfaces';
import { UserService } from 'src/services/user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userParam: Partial<User>;
  retrievedUser: User;

  constructor(private route: ActivatedRoute, private userService: UserService) {
    this.userParam = {
      'userName': this.route.snapshot.paramMap.get('userName')!
    };
    this.retrievedUser = <Partial<User>>this.userService.getUserData(this.userParam);
  }

  ngOnInit(): void {}
}
