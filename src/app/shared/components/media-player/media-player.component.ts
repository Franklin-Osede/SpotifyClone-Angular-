import { Component } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent {
  mockCover: TrackModel = {
    cover: 'https://i.scdn.co/image/ab676160000b27345ca41b0d2352242c7c9d4bc',
    album: 'Gioli & Assu',
    name: 'BBE (Oficial)',
    url: 'http://localhost/track.mp3',
    _id:1
  }

}
