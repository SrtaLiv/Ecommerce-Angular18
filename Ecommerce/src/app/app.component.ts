import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { LucideAngularModule, User, ShoppingBag, Search, Menu, MapPin, X, MessageSquareMore, Twitter, Instagram, Facebook, MousePointerClick  } from 'lucide-angular'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, LucideAngularModule, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})

export class AppComponent implements OnInit {
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

  ngOnInit(): void {
    window.addEventListener("scroll", () => {
      const elemento = document.querySelector("header") as HTMLElement | null;
      if (elemento) {
        if (window.scrollY > 800) {
          elemento.classList.add("nav-color");
        } 
        else {
          elemento.classList.remove("nav-color");
        }
      }
    });
  }

}
