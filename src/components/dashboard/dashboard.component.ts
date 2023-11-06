import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit{
  userName: string | null;

  constructor(private route: ActivatedRoute) {
    this.userName = this.route.snapshot.paramMap.get('userName');
  }

  ngOnInit(): void {}
}
