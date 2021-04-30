import { Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { map } from 'rxjs-compat/operator/map';
import { IcountryList } from '../../model/country';
import { CountryListService } from '../../service/country-list.service';
import { loadAsiaCountry, loadEuropeCountry } from '../../store/country.action';
import { CountryState, CountryStateSuccess } from '../../store/country.reducer';

@Component({
  selector: 'app-countryList',
  templateUrl: './countrydetail.component.html',
  styleUrls: ['./countrydetail.component.scss']
})
export class CountrydetailComponent implements OnInit {

  selectRegion=false;
  regionList=['europe','asia'];
  countryEuropeDataList: IcountryList[]=[];
  countryAsiaDataList: IcountryList[]=[];
  countryNameList:string[]=[];
  europeRegionLoaded=false;
  asiaRegionLoaded=false;
  selectedCountrDetail:IcountryList[]=[];
  selectedRegion=undefined;
  selectedCountry=undefined;

  constructor(private countrylistService:CountryListService,
              private storeEurope:Store<{loadEuropeCountryList: {region:string,regionloaded:boolean}}>,
              private storeEuropeSuccess:Store<{countryListSuccess :CountryStateSuccess}>,
              private storeAsia:Store<{loadAsiaCountryList :{region:string,regionloaded:boolean}}>,
              private storeAsiaSuccess:Store<{loadAsiaCountryListSuccess :CountryStateSuccess}>
              ) { }
  

  ngOnInit(): void {
   this.storeEurope.select('loadEuropeCountryList').subscribe(data=>{
                        this.europeRegionLoaded=data.regionloaded;
                      });

    this.storeAsia.select('loadAsiaCountryList').subscribe(data=>{
      this.asiaRegionLoaded=data.regionloaded;
    });

    this.storeEuropeSuccess.select('countryListSuccess').subscribe(data=>{
                                              this.countryEuropeDataList= data['countryListSuccess'];
                                              this.countryNameList=this.countryEuropeDataList.map(c=> c.name);
                                                });
    this.storeAsiaSuccess.select('loadAsiaCountryListSuccess').subscribe(data=>{
      this.countryAsiaDataList= data['countryListSuccess'];
      this.countryNameList=this.countryAsiaDataList.map(c=> c.name);
        });
      
  }
  

  onSelectRegion(selectionChange:string){

    if(selectionChange==='0'){
      this.selectRegion= false; 
    
    }else{
      this.selectedRegion=selectionChange;
      this.selectRegion= true;
      if(selectionChange === 'europe'){
        this.storeEurope.dispatch(loadEuropeCountry({region:selectionChange,regionloaded:this.europeRegionLoaded}))
      }else{
        this.storeAsia.dispatch(loadAsiaCountry({region:selectionChange,regionloaded:this.asiaRegionLoaded}))
      }
       
    }
    
 
  }
  onSelectCountry(selectionchnage:string){
    this.selectedCountry = selectionchnage;
   
    
  }
  loadCountry(){
    if(this.selectedRegion === 'europe'){
      this.selectedCountrDetail = this.countryEuropeDataList.filter(c=> c.name ===this.selectedCountry);
    }else{
      this.selectedCountrDetail = this.countryAsiaDataList.filter(c=> c.name ===this.selectedCountry);
    }
  }
}
