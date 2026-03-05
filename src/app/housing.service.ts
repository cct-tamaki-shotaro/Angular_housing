import { Injectable } from '@angular/core';
import { HousinglocationInfo } from './housinglocation';

@Injectable({
  providedIn: 'root',
})
export class HousingService {
  url = 'http://localhost:3000/locations';

  async getAllHousingLocations(): Promise<HousinglocationInfo[]> {
    const data = await fetch(this.url);
    return (await data.json()) ?? [];
  }

  async getHousingLocationById(id: number): Promise<HousinglocationInfo | undefined>{
    const data = await fetch(`${this.url}/${id}`);
    const locationJson = await data.json();
    return locationJson ?? {};
  }

//   async getHousingLocationById(id: number): Promise<HousinglocationInfo | undefined> {
//     const data = await fetch(`${this.url}?id=${id.toString()}`);
//     const locationJson = await data.json();
//     return locationJson[0] ?? {};
// }

  submitApplication(firstName: string, lastName: string, email: string) {
    console.log(
      `Homes application received: firstName: ${firstName}, lastName: ${lastName}, email: ${email}.`,
    );
  }

}
