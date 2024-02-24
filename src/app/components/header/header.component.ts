import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  @Output() menuToggled = new EventEmitter<boolean>();
  @Output() selectedUser = new EventEmitter<boolean>();

  menuClick(user: any) {
    this.selectedUser.emit(user);
  }
}
