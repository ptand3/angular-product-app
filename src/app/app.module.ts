// import { ɵgetDirectives } from "@angular/core";

/*Modules is a logical collection of components, 
Directives, pipes , services ,dependencies to other modules 
*/
import {NgModule} from "@angular/core"; 
import { FormsModule} from "@angular/forms" ;
import { BrowserModule}  from "@angular/platform-browser" ;
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeaderComponent } from './components/header/header.component';
import { CounterComponent } from './components/counter/counter.component';
import { ContactComponent } from './components/contact/contact.component';
import { FooterComponent } from './components/footer/footer.component';
import { SharedModule } from './shared/shared.module';
import { CartModule } from './cart/cart.module';

import { RouterModule , Route} from "@angular/router";
import { NotFoundComponent } from './components/not-found/not-found.component' ;
// import {ProductRoutingModule} from "./product/product-routing.module" ;
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import {ErrorHandler} from "@angular/core"  ;
import { ErrorHandlerService} from "./services/error-handler.service";
import { LoginComponent } from './components/login/login.component';
import { AuthGuard } from './shared/guards/auth.guard';
import { AuthInterceptorService } from './services/auth-interceptor.service';
 


//1.configuration
const routes : Route[] = [
    //map the path to the component
    {
       path :'',
       component :HomeComponent 
    },
    {
        path: "about",
        component :AboutComponent
    },
    {
        path :"contact",
        component :ContactComponent
    },
    {
        path :"counter",
        component :CounterComponent
    },
    {
        path:"products",
        loadChildren :"./product/product-routing.module#ProductRoutingModule", //lasy loading the products routes,
        canActivate : [AuthGuard]
    },
    {
        path : 'auth/login',
        component :LoginComponent
    },
    {
        //at last
        path: "**",
        component :NotFoundComponent
    }
]

@NgModule({  //meta data about module
   
    imports :[      //other module dependencies
        BrowserModule,  //used when we want to run the app in our browser ,
        SharedModule , // shared module components  used by app module components
        FormsModule , //for ng module
        CartModule,
        // ProductRoutingModule,
        HttpClientModule,
        //2 . apply the configuration
        //root/app/main module
        RouterModule.forRoot(routes)

    ],
    declarations :[ 
        //components, pipes , directives
        AppComponent, HomeComponent, AboutComponent, HeaderComponent, CounterComponent, ContactComponent, FooterComponent, NotFoundComponent, LoginComponent

    ],
    providers:[
        
        {
            provide: ErrorHandler,
            useClass: ErrorHandlerService
        },
        {
            provide :HTTP_INTERCEPTORS,
            useClass :AuthInterceptorService,
            multi :true
        }
    ],
    bootstrap:[
      AppComponent
    ],
})

export  class AppModule{

}