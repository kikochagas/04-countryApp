import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';

@Component({
  selector: 'app-by-country-page',
  templateUrl: './by-country-page.component.html',
  styles: [
  ]
})
export class ByCountryPageComponent implements OnInit {

  public countries: Country[] = [];
  public initialValue = '';
  constructor(private countriesSevice: CountriesService){

  }

  ngOnInit(): void {
    this.initialValue = this.countriesSevice.cacheStore.byCountries.term;
    this.countries = this.countriesSevice.cacheStore.byCountries.countries;
  }

  searchByCountry( term: string) {
    this.countriesSevice.searchCountry( term ).subscribe(data =>{
      console.log(data);
      this.countries = data;

    });
  }

}
