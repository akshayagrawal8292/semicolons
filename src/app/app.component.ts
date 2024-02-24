import { Component, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  @ViewChild(MatDrawer) matDrawer: MatDrawer | undefined;

  title = 'angular-semicolon';
  opened = false;
  userSelected: string = 'Broker';

  toggle(): void {
    if (this.matDrawer?.opened) {
      this.matDrawer?.close();
      this.opened = false;
    } else {
      this.opened = true;
      this.matDrawer?.open();
    }
  }

  constructor() {
    this.menu = [
      {
        title: 'Home',
        icon: 'home',
        link: '/home',
        color: '#ff7f0e',
      },
      {
        title: 'Policywise',
        icon: 'policy',
        link: '/policywise/selectPolicy',
        color: '#ff7f0e',
      },
      {
        title: 'Guru-app',
        icon: 'people',
        color: '#ff7f0e',
        link: '',
      },
      {
        title: 'Swift-claim',
        icon: 'people',
        color: '#ff7f0e',
        link: '',
      },
      {
        title: 'Atlas',
        icon: 'people',
        color: '#ff7f0e',
        link: 'atlas/claimList',
      },
      {
        title: 'Email-Gen',
        icon: 'people',
        color: '#ff7f0e',
        link: '',
      },
    ];
  }

  menu: any = [];

  selectedUser(user: any) {
    this.userSelected = user;
    if (this.userSelected === 'broker') {
      this.menu = [
        {
          title: 'Home',
          icon: 'home',
          link: '/home',
          color: '#ff7f0e',
        },
        {
          title: 'Policywise',
          icon: 'policy',
          link: '/policywise/selectPolicy',
          color: '#ff7f0e',
        },
        {
          title: 'Guru-app',
          icon: 'people',
          color: '#ff7f0e',
          link: '',
        },
        {
          title: 'Swift-claim',
          icon: 'people',
          color: '#ff7f0e',
          link: '',
        },
        {
          title: 'Atlas',
          icon: 'people',
          color: '#ff7f0e',
          link: 'atlas/claimList',
        },
        {
          title: 'Email-Gen',
          icon: 'people',
          color: '#ff7f0e',
          link: '',
        },
      ];
    } else if (this.userSelected === 'client') {
      this.menu = [
        {
          title: 'Home',
          icon: 'home',
          link: '/home',
          color: '#ff7f0e',
        },
        {
          title: 'Policywise',
          icon: 'policy',
          link: '/policywise/selectPolicy',
          color: '#ff7f0e',
        },
        {
          title: 'Guru-app',
          icon: 'people',
          color: '#ff7f0e',
          link: '/guru',
        },
        {
          title: 'Swift-claim',
          icon: 'people',
          color: '#ff7f0e',
          link: '/guru',
        },
        {
          title: 'Atlas',
          icon: 'people',
          color: '#ff7f0e',
          link: '/atlas/claimList',
        },
        {
          title: 'Email-Gen',
          icon: 'people',
          color: '#ff7f0e',
          link: '/guru',
        },
      ];
    }
  }
}
