import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-episodes',
  templateUrl: './gallery-episodes.component.html',
  styleUrls: ['./gallery-episodes.component.scss']
})
export class GalleryEpisodesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() items:any[]= []
}
