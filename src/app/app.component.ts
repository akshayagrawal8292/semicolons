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

  toggle(): void {
    if(this.matDrawer?.opened)
    {
      this.matDrawer?.close()
      this.opened=false
    }else
    {
      this.opened =true;
      this.matDrawer?.open()
    }
   
    
  }

constructor(){
 
}

  menu: any = [
    {
      title: 'Home',
      icon: 'home',
      link: '/home',
      color: '#ff7f0e',
    },
    {
      title: 'Statistics',
      icon: 'bar_chart',
      color: '#ff7f0e',
      subMenu: [
        {
          title: 'Sales',
          icon: 'money',
          link: '/sales',
          color: '#ff7f0e',
        },
        {
          title: 'Customers',
          icon: 'people',
          color: '#ff7f0e',
          link: '/customers',
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
      ],
    },
  ];
}
