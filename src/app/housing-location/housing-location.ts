import { Component, Input, input } from '@angular/core';
import { HousinglocationInfo } from '../housinglocation';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="housingLocation().photo"
        alt="Exteror photo of {{ housingLocation().name }}"
        crossorigin
      />
      <h2 class="listing-heading">{{ housingLocation().name }}</h2>
      <p class="listing-location">{{ housingLocation().city }}, {{ housingLocation().state }}</p>
      <a [routerLink]="['details', housingLocation().id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
  imports: [RouterLink],
})
export class HousingLocation {
  housingLocation = input.required<HousinglocationInfo>();
  // @Input() housingLocation!: HousinglocationInfo;
}
