import { Component, OnDestroy, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';
import { MultimediaService } from '../../services/multimedia.service';
import { Subscription, Observable } from 'rxjs';

@Component({
  selector: 'app-media-player',
  templateUrl: './media-player.component.html',
  styleUrl: './media-player.component.css'
})
export class MediaPlayerComponent implements OnInit, OnDestroy {

  listObservers$:Array<Subscription> = []

  constructor(public multimediaService: MultimediaService){}

  ngOnInit():void {
   

 
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u => u.unsubscribe())
  
  }

}
