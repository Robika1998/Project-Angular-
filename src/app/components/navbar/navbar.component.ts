import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  isCollapsed = false;
  currentTitle = 'NewPage';

  ngOnInit() {
    this.router.events
      .pipe(filter((event) => event instanceof NavigationEnd))
      .subscribe(() => {
        this.updateTitle();
      });
  }

 

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  updateTitle() {
    const child = this.activatedRoute.firstChild;
    if (child && child.snapshot.data['title']) {
      this.currentTitle = child.snapshot.data['title'];
    } else {
      this.currentTitle = 'NewPage';
    }
  }

  navigateTo(route: string) {
    this.router.navigate([route]);
  }
}
