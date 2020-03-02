import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductListComponent } from './components/product-list/product-list.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SaveAlertGuard } from './guards/save-alert.guard';

@NgModule({
  declarations: [
    ProductHomeComponent, 
    ProductListComponent, 
    ProductEditComponent, 
    ProductSearchComponent,
    // FilterPipe,
    // PowerPipe, 
    // SortPipe
  ],
  imports: [
    CommonModule,
    RouterModule, 
    SharedModule,
    FormsModule,
    ReactiveFormsModule
  ],
  // providers:[
  //   SaveAlertGuard
  // ]
})
export class ProductModule { }
