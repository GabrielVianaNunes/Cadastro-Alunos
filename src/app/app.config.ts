import { ApplicationConfig, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideForms } from '@angular/forms/standalone'; // ✅ Correto para projetos standalone

import { routes } from './app.routes';

export const appConfig: ApplicationConfig = {
  providers: [
    provideZoneChangeDetection({ eventCoalescing: true }),
    provideRouter(routes),
    provideForms() // ✅ Habilita o uso de [(ngModel)] em componentes standalone
  ]
};
