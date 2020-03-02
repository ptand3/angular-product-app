//Load or bootstrap the angular app module [ Appcomponent] into browser dynamically

import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);