# PrpClient

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.6.

## Development server
Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/route/class`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/). 
Before running the tests make sure you are serving the app via `ng serve`.

## Deploying to Github Pages

Run `ng github-pages:deploy` to deploy to Github Pages.

###############################################

- Steps found at https://github.com/angular/angular-cli#installation

        $ npm install -g angular-cli
        $ ng new FIRST_ATTEMPT
        $ cd FIRST_ATTEMPT

- Try to serve
  - ng serve -> without admin, gives error asking for symlink and stuff. https://github.com/angular/angular-cli/issues/403
  - REQUIRES RUNNING AS ADMIN:
  
          $ ng serve

- Try to test
  - `$ ng test` -> BUGS due to file limit. https://github.com/angular/angular-cli/issues/864 https://github.com/angular/angular-cli/issues/977
  - WORKAROUND:

          $ ng build && ng test --build=false --watch=false

---
- Build the gh-pages branch and pushes it

        $ ng github-pages:deploy

# Installing primeng


     $ npm install primeng --save
     $ npm install primeui --save

And do the changes showed in the commit.
