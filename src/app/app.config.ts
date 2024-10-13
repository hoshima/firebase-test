import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { initializeApp, provideFirebaseApp } from '@angular/fire/app';
import {
  getAnalytics,
  provideAnalytics,
  ScreenTrackingService,
} from '@angular/fire/analytics';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideFirebaseApp(() =>
      initializeApp({
        projectId: 'fir-test-bac4d',
        appId: '1:760236729898:web:faa0ef7d5b2f587eaa0553',
        storageBucket: 'fir-test-bac4d.appspot.com',
        apiKey: 'AIzaSyAVLJLYRZkOhvGsz_ETRuuMyxklCGJqrYc',
        authDomain: 'fir-test-bac4d.firebaseapp.com',
        messagingSenderId: '760236729898',
        measurementId: 'G-J3CHELPC7Z',
      })
    ),
    provideAnalytics(() => getAnalytics()),
    ScreenTrackingService,
  ],
};
