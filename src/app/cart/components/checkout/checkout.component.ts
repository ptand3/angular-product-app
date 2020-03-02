import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import {Component, OnInit, Inject, Attribute} from "@angular/core";
import {ActivatedRoute, Params} from "@angular/router";

import { FormGroup, FormControl, Validators, 
    FormBuilder, Validator, AbstractControl } 
    from '@angular/forms';
import { environment } from 'src/environments/environment';

 
 

 function CountryValidator(control: AbstractControl): {
        [key: string]: boolean;
    } {

        console.log("Console ", control.value);

        if (control.value === 'IN' || control.value === 'India') {
            return; // return undefined means no error
        }

        return {
            invalidCountry: true
        };
    }

interface State {
  code: string;
  id: number;
  name: string;
}

interface City {
  code: string;
  id: number;
  name: string;
  stateId: number;
}

import {filter, map} from 'rxjs/operators';



@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
    states$: Observable<State[]>;
    cities$: Observable<City[]>;
 

    form: FormGroup;

    fullNameControl:FormControl;
    stateControl:FormControl;
    cityControl:FormControl;
    countryControl:FormControl;
  

    constructor( 
                private route: ActivatedRoute,
                private http: HttpClient,
                 formBuilder: FormBuilder
    ) {
         

        this.fullNameControl = new FormControl("", Validators.required);
        this.stateControl = new FormControl("");
        this.cityControl = new FormControl("");
        this.countryControl = new FormControl("", [Validators.required ,Validators.minLength(2), CountryValidator]);

         this.form = formBuilder.group({
            "fullName": this.fullNameControl,
            "state": this.stateControl,
            "city": this.cityControl,
            "country": this.countryControl
        }); 

    }
 
    ngOnInit() {     
         
        this.states$ = this.http.get<State[]>(`${environment.apiEndPoint}/api/states`);

          

        this.stateControl.valueChanges
        .pipe(filter ( (value:any) => !!value))
        .subscribe ( (value: any) => {
        
            this.cities$ = this.http.get<City[]>(`${environment.apiEndPoint}/api/cities?stateId=${value}`);
 
        });
    }

     
}
      