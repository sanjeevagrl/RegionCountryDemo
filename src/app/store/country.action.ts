import { createAction, props } from '@ngrx/store';
import { IcountryList } from '../model/country';



export const LOAD_EUROPE_COUNTRY = '[country Component] Load Europe Region';
export const LOAD_EUROPE_COUNTRY_SUCCESS = '[country Component] Load Europe Region Success';
export const LOAD_ASIA_COUNTRY = '[country Component] Load Asia Region';
export const LOAD_ASIA_COUNTRY_SUCCESS = '[country Component] Load Asia Region Success';


export const loadEuropeCountry = createAction(LOAD_EUROPE_COUNTRY,props<{region:string,regionloaded:boolean}>());
export const loadEuropeCountrysucess = createAction(LOAD_EUROPE_COUNTRY_SUCCESS,props<{countryListSuccess:IcountryList[]}>() );
export const loadAsiaCountry = createAction(LOAD_ASIA_COUNTRY,props<{region:string,regionloaded:boolean}>());
export const loadAsiaCountrysucess = createAction(LOAD_ASIA_COUNTRY_SUCCESS,props<{countryListSuccess:IcountryList[]}>() );
