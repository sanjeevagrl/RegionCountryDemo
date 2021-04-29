import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { Store } from "@ngrx/store";
import { exhaustMap } from "rxjs-compat/operator/exhaustMap";
import { tap } from "rxjs/operators";
import { IcountryList } from "../model/country";
import { CountryListService } from "../service/country-list.service";
import { loadAsiaCountry, loadAsiaCountrysucess, loadEuropeCountry, loadEuropeCountrysucess, LOAD_EUROPE_COUNTRY } from "./country.action";
import { CountryState, CountryStateSuccess } from "./country.reducer";

@Injectable()
export class CountryListEffects{

    constructor(private actions$: Actions, private countryServie: CountryListService,private store:Store<CountryState>, private storeSuccess:Store<CountryStateSuccess>){
     
      const europecountryList$ = createEffect(()=> this.actions$.pipe(
                  ofType(loadEuropeCountry),
                  tap(action=>{
                    if(action.regionloaded){                     
                    }else{
                      this.countryServie.getCountries(action.region).subscribe((res: IcountryList[])=> {
                        this.storeSuccess.dispatch(loadEuropeCountrysucess({countryListSuccess:res}))
                        this.store.dispatch(loadEuropeCountry({region:action.region,regionloaded:true}))
                      })
                    }
                  })
                  ));
      
     
      europecountryList$.subscribe();

      const asiacountryList$ = createEffect(()=> this.actions$.pipe(
        ofType(loadAsiaCountry),
        tap(action=>{
          if(action.regionloaded){                     
          }else{
            this.countryServie.getCountries(action.region).subscribe((res: IcountryList[])=> {
              this.storeSuccess.dispatch(loadAsiaCountrysucess({countryListSuccess:res}))
              this.store.dispatch(loadAsiaCountry({region:action.region,regionloaded:true}))
            })
          }
        })
        ));


        asiacountryList$.subscribe();


    }
}
