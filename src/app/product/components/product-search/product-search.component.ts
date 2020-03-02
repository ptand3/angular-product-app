import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';
import { ProductService } from '../../services/product.service';
import { FormBuilder, FormControl, FormGroup } from "@angular/forms";
import { map, filter , debounceTime} from "rxjs/operators" ;


@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.scss']
})
export class ProductSearchComponent implements OnInit {

  //REACT FORMS
  products$: Observable<Product[]>
  searchText: string;

  group: FormGroup;  //form
  searchControl: FormControl; //input box

  constructor(private productService: ProductService, private builder: FormBuilder) {
    this.searchControl = new FormControl('Samsung');
    this.group = this.builder.group({
      //html binding name : control object
      'search': this.searchControl
    });
  }

  reset() {
    this.searchControl.setValue("");
  }

  ngOnInit() {
    this.searchControl.valueChanges
    .pipe(filter(value => !!value)) //non empty strings are true
    .pipe(map(value =>value.trim().toLowerCase()))
    .pipe(debounceTime(500))
    .subscribe(value => {
      console.log('*'+value+'*');
      this.searchText = value;
      this.products$ = this.productService.searchProducts(value);
    });

  }
}
