import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CountrydetailComponent } from './component/countrydetail/countrydetail.component';
import { SelectComponent } from './CommonComponent/select/select.component';
import {HttpClientModule} from '@angular/common/http';
import { SelectedcountrydetailComponent } from './CommonComponent/selectedcountrydetail/selectedcountrydetail.component';
import { StoreModule } from '@ngrx/store'
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { countryAsiaLoadReducer, countryAsiaLoadSucessReducer, countryLoadReducer, countryLoadSucessReducer } from './store/country.reducer';
import { CountryListEffects } from './store/country.effect';
//import { CountryListEffects,countryLoadReducer,countryLoadSucessReducer } from './Store';
//import { CountryListEffects } from './store/country.effect';

@NgModule({
  declarations: [
    AppComponent,
    CountrydetailComponent,
    SelectComponent,
    SelectedcountrydetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({loadEuropeCountryList:countryLoadReducer,countryListSuccess:countryLoadSucessReducer,
                        loadAsiaCountryList:countryAsiaLoadReducer,loadAsiaCountryListSuccess:countryAsiaLoadSucessReducer}),
    EffectsModule.forRoot([CountryListEffects]),
    StoreDevtoolsModule.instrument({ maxAge: 25, logOnly: environment.production })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
