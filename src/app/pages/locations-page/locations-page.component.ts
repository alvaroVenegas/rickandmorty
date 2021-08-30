import { Component, OnInit } from '@angular/core';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-page',
  templateUrl: './locations-page.component.html',
  styleUrls: ['./locations-page.component.scss']
})
export class LocationsPageComponent implements OnInit {

  locationList:any[]=[];

  constructor(private locationService: LocationsService) { }

  ngOnInit(): void {
    
    this.locationService.getLocations()
    .subscribe(
      results => this.locationList = results.results,
      );
    


  };




};
