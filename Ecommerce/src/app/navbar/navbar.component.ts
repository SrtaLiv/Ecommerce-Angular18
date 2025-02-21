import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  logo = 'Olivia';
  isOpen = false;

  toggleMenu() {
    this.isOpen = true;
  }

  closeMenu(logo : string) {
    this.isOpen = false;
    this.logo = logo;
  }
}
