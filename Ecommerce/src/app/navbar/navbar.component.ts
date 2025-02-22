import { Component } from '@angular/core';
import { LucideAngularModule, User, ShoppingBag, Search, Menu, MapPin } from 'lucide-angular';
import { FooterComponent } from '../footer/footer.component';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, FooterComponent],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly User = User;
  readonly ShoppingBag = ShoppingBag;
  readonly Search = Search;
  readonly Menu = Menu;
  readonly MapPin = MapPin;

  logo = 'Olivia';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alternar estado del menú
  }


}
