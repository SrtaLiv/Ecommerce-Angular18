import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LucideAngularModule, User, ShoppingBag, Search, Menu, MapPin, X, MessageSquareMore, Twitter, Instagram, Facebook, MousePointerClick  } from 'lucide-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent {
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
  readonly MousePointerClick = MousePointerClick;

  logo = 'Olivia';
  menuOpen = false;

  toggleMenu() {
    this.menuOpen = !this.menuOpen; // Alternar estado del menú
    document.body.classList.toggle('show');
  }


  title = 'Ecommerce';
}
