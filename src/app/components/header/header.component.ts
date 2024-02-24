import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  @Output() selectedUser = new EventEmitter<boolean>();
user:string='Broker'
  menuClick(user: any) {
    this.user=user;
    this.selectedUser.emit(user);
  }
}
