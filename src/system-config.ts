// SystemJS configuration file, see links for more information
// https://github.com/systemjs/systemjs
// https://github.com/systemjs/systemjs/blob/master/docs/config-api.md

/***********************************************************************************************
 * User Configuration.
 **********************************************************************************************/
/** Map relative paths to URLs. */
const map: any = {
    'angular2-fontawesome': 'vendor/angular2-fontawesome'
};

/** User packages configuration. */
const packages: any = {
    'angular2-fontawesome': {
        defaultExtension: 'js'
    }
};

////////////////////////////////////////////////////////////////////////////////////////////////
/***********************************************************************************************
 * Everything underneath this line is managed by the CLI.
 **********************************************************************************************/
const barrels: string[] = [
  // Angular specific barrels.
  '@angular/core',
  '@angular/common',
  '@angular/compiler',
  '@angular/forms',
  '@angular/http',
  '@angular/router',
  '@angular/platform-browser',
  '@angular/platform-browser-dynamic',

  // Thirdparty barrels.
  'rxjs',
  'ng2-bootstrap',
  'ng2-table',

  // App specific barrels.
  'app',
  'app/shared',
  'app/dashboard',
  'app/revenue',
  'app/cards',
  'app/coupons',
  'app/products',
  'app/menu-top',
  'app/cart',
  'app/menu-left',
  'app/card-edit',
  /** @cli-barrel */
];

const cliSystemConfigPackages: any = {};
barrels.forEach((barrelName: string) => {
  if (barrelName == 'ng2-bootstrap') {
      cliSystemConfigPackages[barrelName] = { main: 'ng2-bootstrap' };
  } else if (barrelName == 'ng2-table') {
      cliSystemConfigPackages[barrelName] = { main: 'ng2-table' };
  } else {
      cliSystemConfigPackages[barrelName] = {main: 'index'};
  }
});

/** Type declaration for ambient System. */
declare var System: any;

// Apply the CLI SystemJS configuration.
System.config({
  map: {
    '@angular': 'vendor/@angular',
    'rxjs': 'vendor/rxjs',
    'ng2-bootstrap': 'vendor/ng2-bootstrap',
    'ng2-table': 'vendor/ng2-table',
    'moment': 'vendor/moment/moment.js',
    'main': 'main.js'
  },
  packages: cliSystemConfigPackages
});

// Apply the user's configuration.
System.config({ map, packages });
