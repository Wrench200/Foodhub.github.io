import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavbarService } from '../Services/navbar.service';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styleUrls: ['./breadcrumbs.component.scss']
})
export class BreadcrumbsComponent implements OnInit {
  url!: string;
  time!: number;
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nav.hide()
      this.url = params['uri']
      this.time = params['time']

    })

    setTimeout(() => {
      this.router.navigate([this.url]).then(() => {
        window.location.reload()
      })
     }, this.time)
  }
  constructor(private router: Router, private route: ActivatedRoute, public nav : NavbarService){}
}
