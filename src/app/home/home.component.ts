import { ChangeDetectorRef, Component, inject } from '@angular/core';
import { HousingLocationComponent } from '../housing-location/housing-location.component';
import { HousingLocation } from '../models/housing-location.model';
import { HousingService } from '../housing.service';

@Component({
  selector: 'app-home',
  imports: [HousingLocationComponent],
  template: `
    <section class="results">
      <form>
        <input type="text" placeholder="Filter by city" #filter />
        <button class="primary" type="button" (click)="filterResults(filter.value)">Search</button>
      </form>
    </section>
    <section class="results">
      @for (location of filteredLocations; track $index) {
        <app-housing-location [location]="location" />
      }
    </section>
  `,
  styleUrls: ['./home.css'],
})
export class HomeComponent {
  private readonly changeDetectorRef = inject(ChangeDetectorRef);
  locations: HousingLocation[] = [];
  housingService: HousingService = inject(HousingService);
  filteredLocations: HousingLocation[] = [];


  constructor(){
    this.housingService
      .getAllHousingLocations()
      .then((locations: HousingLocation[]) => {
        this.locations = locations;
        this.filteredLocations = locations;
        this.changeDetectorRef.markForCheck();
      });
  }

  filterResults(text: string) {
    if (!text) {
      this.filteredLocations = this.locations;
      return;
    }

    this.filteredLocations = this.locations.filter((loc) =>
      loc?.city.toLowerCase().includes(text.toLocaleLowerCase()),
    );
  }
}
