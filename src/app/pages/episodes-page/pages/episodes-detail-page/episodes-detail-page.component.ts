import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';
import { EpisodesService } from 'src/app/shared/services/episodes.service';

@Component({
  selector: 'app-episodes-detail-page',
  templateUrl: './episodes-detail-page.component.html',
  styleUrls: ['./episodes-detail-page.component.scss']
})
export class EpisodesDetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private episodeService: EpisodesService,
    private characterService: CharactersService) { }

  episode: any = {}
  characterList: any[] = []

  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {

      let idEpisode = params.get('idEpisode')

      this.episodeService.getEpisode(idEpisode)
        .subscribe(
          results => {
            this.episode = results
            //this.generateCharacters(this.episode)

            for (let i = 0; i < this.episode.characters.length; i++) {
              const character = this.episode.characters[i];

              let idCharacter = character.substring(42)
              console.log(idCharacter)

              this.characterService.getCharacter(idCharacter).subscribe(
                results => this.characterList.push(results))
            }



          })
    });

    //realizar un bucle con los personajes que aparecen en el capitulo 
    //se coge el id
    //se hace llamada a la api de personaje
    //se recorre el array generado en el hml y se pinta


  }






}
