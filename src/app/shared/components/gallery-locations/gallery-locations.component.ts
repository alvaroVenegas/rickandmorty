import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery-locations',
  templateUrl: './gallery-locations.component.html',
  styleUrls: ['./gallery-locations.component.scss']
})
export class GalleryLocationsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  @Input() items:any[]= []
}
