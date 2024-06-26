import { Component, OnInit, OnDestroy } from '@angular/core';
import * as dataRaw from '../../../../data/tracks.json'
import { TrackModel } from '@core/models/tracks.model';
import { TrackService } from '@modules/services/track.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-tracks-page',
  templateUrl: './tracks-page.component.html',
  styleUrl: './tracks-page.component.css'
})
export class TracksPageComponent implements OnInit, OnDestroy {
  tracksTrending: Array<TrackModel> = []
  tracksRandom: Array<TrackModel> = []

  listObservers$: Array<Subscription> = []

  constructor(private trackService: TrackService){}

  ngOnInit(): void {
    const observer1$ = this.trackService.dataTracksTrending$
        .subscribe(response => {
         this.tracksTrending = response
         this.tracksRandom = response
        })

        const observer2$ = this.trackService.dataTracksRandom$
        .subscribe(response => {
         this.tracksRandom = [...this.tracksRandom, ...response]
        })   
   
      this.listObservers$ = [observer1$, observer2$]
  }

  ngOnDestroy(): void {
    this.listObservers$.forEach(u=> u.unsubscribe())
  }

}
