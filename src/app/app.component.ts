//Component business logic in typescript 
 import { Component , OnInit } from "@angular/core"; //importing module from module

//MVW : Model View Whatever Component Structure


 @Component({   //decorator that describes the meta-data about the component  
    selector : "app-root" ,  //tustome HTML tag, cusinstance of the component that angular injects into another ; refrence of the component
    templateUrl : "app.component.html",
    styleUrls :[
       "app.component.scss"
    ]
 })

 export class AppComponent implements OnInit{
     //model attributes bindable to  html view
     appTitle :String = "Product App" ;
     constructor(){
         console.log("App is Loaded");
     }

     //callback called by framework after loading view into browser

     ngOnInit(){  //making API calls
         console.log("App component ngOnIt");

     }
 }