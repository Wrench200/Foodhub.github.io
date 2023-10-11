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
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.nav.hide()
      this.url = params['uri']
      

    })

    setTimeout(() => {
      this.router.navigate([this.url]).then(() => {
        window.location.reload()
      })
     },5000)
  }
constructor(private router: Router, private route: ActivatedRoute, public nav : NavbarService){}
}
