import { Component } from '@angular/core';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: any = {
    cover: 'https://i.scdn.co/image/ab676160000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assu',
    name: 'BBE (Oficial)',
  }

}
