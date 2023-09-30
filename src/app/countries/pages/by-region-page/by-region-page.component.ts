import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/country';
import { CountriesService } from '../../services/countries.service';
import { Region } from '../../interfaces/region.type';



@Component({
  selector: 'app-by-region-page',
  templateUrl: './by-region-page.component.html',
  styles: [
  ]
})
export class ByRegionPageComponent implements OnInit{
  public countries: Country[] = [];
  public regions: Region[] = ['Africa', 'Americas',  'Asia', 'Europe', 'Oceania'];
  public selectedRegion?: Region;
  constructor(private countriesSevice: CountriesService){

  }

  ngOnInit(): void {
    this.selectedRegion = this.countriesSevice.cacheStore.byRegion.region;
    this.countries = this.countriesSevice.cacheStore.byRegion.countries;
  }

  searchByRegion( term: Region) {
    this.selectedRegion = term;
    this.countriesSevice.searchRegion( term ).subscribe(data =>{
      console.log(data);
      this.countries = data;

    });
  }

}
