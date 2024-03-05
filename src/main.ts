import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { CatalogComponent } from './app/app/COMPONENT/catalog/catalog.component';


bootstrapApplication(CatalogComponent, appConfig)
  .catch((err) => console.error(err));
