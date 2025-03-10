import { Component } from '@angular/core';
import { LucideAngularModule, MoveRight, Instagram, Facebook, Youtube } from 'lucide-angular';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [LucideAngularModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  readonly MoveRight = MoveRight;
  readonly Instagram = Instagram;
  readonly Facebook = Facebook;
  // readonly TikTok = TikTok; hay que buscar en otra pagina
  // readonly Spotify = Spotify;
  readonly Youtube = Youtube;


}

