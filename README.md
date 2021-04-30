# Region Country Application

This Application is to help people to get the country details of that region e.g population, currency, Flag etc. There are two regions available in this application - Europe and Asia. Depending on the selected region, the country list is populated with the countries in that region. The user then has the option to select the preferred country and then view the details of that country.

## Architecture

This application is built using angular framework which uses two Api's to get the country list of that region. 
This uses state management so that it does not require to hit the api again and again which helps the user to get the faster results.

## Installation instructions

Run `npm install` and then `ng serve` for installing on a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Additional features that could be implemented if time permits

* Much better content projection for the resuable component
* Additional scope to re-factor state management
* Additional scope for DDA(accessibility) we can impliment for disabled person
* additional scope is there for responsive design for all device(mobile, tablet).
*  
## CSS coding standards
 * Use soft-tabs with a two space indent.
 * Use double quotes.
 * Use shorthand notation where possible.
 * Put spaces before { in rule declarations.
 * Use hex color codes #000 unless using rgba().

## coding guildelines used
 * Separate file names with dots
 * Suffix a service class name with Service e.g(country-list.service).
 * use dashed-case for naming the element selectors of components.
 * create folders named for the feature area they represent.
 
## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
