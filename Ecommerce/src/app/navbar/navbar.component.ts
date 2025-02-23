import { Component } from '@angular/core';
import { LucideAngularModule, User, ShoppingBag, Search, Menu, MapPin, X, MessageSquareMore, Twitter, Instagram, Facebook } from 'lucide-angular';
import { FooterComponent } from '../footer/footer.component';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [LucideAngularModule, FooterComponent, ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss'
})
export class NavbarComponent {
  readonly User = User;
  readonly ShoppingBag = ShoppingBag;
  readonly Search = Search;
  readonly Menu = Menu;
  readonly MapPin = MapPin;
  readonly X = X;
  readonly MessageSquareMore = MessageSquareMore;
  readonly Facebook = Facebook;
  readonly Instagram = Instagram;
  readonly Twitter = Twitter;

  logo = 'Olivia';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alternar estado del menú
    document.body.classList.toggle('show');
  }


}
