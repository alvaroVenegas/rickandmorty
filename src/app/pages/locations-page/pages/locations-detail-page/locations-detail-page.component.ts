import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LocationsService } from 'src/app/shared/services/locations.service';

@Component({
  selector: 'app-locations-detail-page',
  templateUrl: './locations-detail-page.component.html',
  styleUrls: ['./locations-detail-page.component.scss']
})
export class LocationsDetailPageComponent implements OnInit {

  constructor(private route: ActivatedRoute,
    private locationService: LocationsService) { }

  location: any = {}
  ngOnInit(): void {

    this.route.paramMap.subscribe((params) => {
      let idLocation = params.get('idLocation')

      this.locationService.getLocation(idLocation)
        .subscribe(
          results => {
            this.location = results
            this.formatResidents(this.location.residents)

          }

        )
    });
  };

  formatResidents(residents: any) {
    return residents.map((urlResident: any) => {
      const lastHashIndex = urlResident.lastIndexOf('/') + 1;
      return urlResident.substring(lastHashIndex)

    })
  }
}
