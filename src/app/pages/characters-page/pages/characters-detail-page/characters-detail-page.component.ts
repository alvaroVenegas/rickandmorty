import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharactersService } from 'src/app/shared/services/characters.service';

@Component({
  selector: 'app-characters-detail-page',
  templateUrl: './characters-detail-page.component.html',
  styleUrls: ['./characters-detail-page.component.scss']
})
export class CharactersDetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private charactersService: CharactersService) { }

  character: any = {}
  searchName:string = ""


  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {

      let idCharacter = params.get('idCharacter')

      this.charactersService.getCharacter(idCharacter)
        .subscribe(
          results => this.character = results
        );
    });
  };
};
