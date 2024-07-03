import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { TrackModel,  } from '@core/models/tracks.model';
import { Observable, of } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class TrackService {


  constructor(private httpClient: HttpClient) { 
   
  }
  getAllTracks$(): Observable {

  }
}
