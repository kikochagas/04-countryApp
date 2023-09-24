import { Component } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent {
  public countries: Country[] = [];
  constructor(private countriesSevice: CountriesService){

  }

  searchByRegion( term: string) {
    this.countriesSevice.searchRegion( term ).subscribe(data =>{
      console.log(data);
      this.countries = data;

    });
  }

}
