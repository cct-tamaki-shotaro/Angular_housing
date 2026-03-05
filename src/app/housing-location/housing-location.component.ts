import { Component, Input, input } from '@angular/core';
import { HousingLocation } from '../models/housing-location.model';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-housing-location',
  template: `
    <section class="listing">
      <img
        class="listing-photo"
        [src]="location().photo"
        alt="Exteror photo of {{ location().name }}"
        crossorigin="anonymous"
      />
      <h2 class="listing-heading">{{ location().name }}</h2>
      <p class="listing-location">{{ location().city }}, {{ location().state }}</p>
      <a [routerLink]="['details', location().id]">Learn More</a>
    </section>
  `,
  styleUrls: ['./housing-location.css'],
  imports: [RouterLink],
})
export class HousingLocationComponent {
  location = input.required<HousingLocation>();
}
