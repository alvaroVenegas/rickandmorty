import { Component, OnInit } from '@angular/core';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-episodes-page',
  templateUrl: './episodes-page.component.html',
  styleUrls: ['./episodes-page.component.scss']
})
export class EpisodesPageComponent implements OnInit {

  episodeList:any[] = [];


  constructor(private episodesService: EpisodesService) { }

  ngOnInit(): void {

    this.episodesService.getEpisodes()
    .subscribe(results => {
      this.episodeList = results.results;
      //console.log(this.episodeList)
    })
  };



  

}
