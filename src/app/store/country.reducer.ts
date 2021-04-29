import { ActionReducer, ActionReducerMap, createReducer, MetaReducer, on, State ,Action} from '@ngrx/store';
import { IcountryList } from '../model/country';
import { loadAsiaCountry, loadAsiaCountrysucess, loadEuropeCountry, loadEuropeCountrysucess } from './country.action';


export interface CountryState{
  region:string;
  regionloaded:boolean;
};

export interface CountryStateSuccess{
  countryListSuccess:IcountryList[]
};


export const initialStateEuropeSuccess:CountryStateSuccess={countryListSuccess:[]}
export const initialEuropeState:CountryState={region:undefined,regionloaded:false}

export const initialStateAsiaSuccess:CountryStateSuccess={countryListSuccess:[]}
export const initialAsiaState:CountryState={region:undefined,regionloaded:false}

 

export const countryLoadReducer= createReducer(initialEuropeState,
                                        on(loadEuropeCountry,(state , action)=>{
                                        return {region:action.region,regionloaded:action.regionloaded}
                                        })
                                        );
export const countryLoadSucessReducer= createReducer(initialStateEuropeSuccess,
                                      on(loadEuropeCountrysucess,(state , action)=>{
                                      return {countryListSuccess:action.countryListSuccess}
                                      })
                                      );

  export const countryAsiaLoadReducer= createReducer(initialAsiaState,
                                        on(loadAsiaCountry,(state , action)=>{
                                        return {region:action.region,regionloaded:action.regionloaded}
                                        })
                                        );
  export const countryAsiaLoadSucessReducer= createReducer(initialStateAsiaSuccess,
                                      on(loadAsiaCountrysucess,(state , action)=>{
                                      return {countryListSuccess:action.countryListSuccess}
                                      })
                                      );
