import { Injectable } from '@angular/core';
import{HttpClient} from '@angular/common/http'
import { IcountryList } from '../model/country';
import * as Rx from "rxjs/Rx";
import { map, catchError } from 'rxjs/operators';
import { from, Observable, throwError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class CountryListService {

  constructor(private http:HttpClient){

  }

 getCountries(region:string){
   return this.http.get<IcountryList[]>('https://restcountries.eu/rest/v2/region/'+region).pipe(
                                      map((data: IcountryList[]) => {
                                          return data;
                                        }), catchError( error => {
                                          return throwError( 'Something went wrong!' );
                                        }))
   //return [];
 }
}
