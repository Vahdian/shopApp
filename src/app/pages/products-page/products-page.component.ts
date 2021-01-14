import { ProductsServiceService } from './../../shared/sevices/products-service.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-products-page',
  templateUrl: './products-page.component.html',
  styleUrls: ['./products-page.component.scss']
})
export class ProductsPageComponent implements OnInit {
  products;
  constructor(private productsServiceService: ProductsServiceService) { }

  ngOnInit(): void {
  this.productsServiceService.getProducts().subscribe(products=>{
    this.products = products;
  });
  }

}
