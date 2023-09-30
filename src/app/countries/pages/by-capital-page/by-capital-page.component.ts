import { Component, OnInit } from '@angular/core';
import { CountriesService } from '../../services/countries.service';
import { Country } from '../../interfaces/country';

@Component({
  selector: 'app-by-capital-page',
  templateUrl: './by-capital-page.component.html',
  styles: [
  ]
})
export class ByCapitalPageComponent implements OnInit {

  public countries: Country[] = [];
  public isLoading = false;
  public initialValue = '';
  constructor(private countriesSevice: CountriesService){

  }

  ngOnInit(): void {
    this.initialValue = this.countriesSevice.cacheStore.byCapital.term;
    this.countries = this.countriesSevice.cacheStore.byCapital.countries;
  }

  searchByCapital( term: string) {
    this.isLoading = true;
    this.countriesSevice.searchCapital( term ).subscribe(data =>{
      console.log(data);
      this.countries = data;
      this.isLoading = false;
    });
  }

}
