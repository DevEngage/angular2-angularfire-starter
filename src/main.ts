import { bootstrap } from '@angular/platform-browser-dynamic';
import { enableProdMode } from '@angular/core';
import { MeansStackAppComponent, environment } from './app/';
import { APP_ROUTER_PROVIDERS } from './app/app.routes';
import {FIREBASE_PROVIDERS, defaultFirebase, AngularFire} from 'angularfire2';

if (environment.production) {
  enableProdMode();
}

bootstrap(MeansStackAppComponent, [
  APP_ROUTER_PROVIDERS,
  FIREBASE_PROVIDERS,
    defaultFirebase({
      apiKey: "AIzaSyDp_HxXYjYxFuanqeMtB2bBm8myCAr2Txk",
      authDomain: "engage-starter.firebaseapp.com",
      databaseURL: "https://engage-starter.firebaseio.com",
      storageBucket: "engage-starter.appspot.com",
  }),
])
  .catch(err => console.error(err));

