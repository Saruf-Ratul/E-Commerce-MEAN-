import { Component, OnInit } from '@angular/core';
import {ProductService} from '../../services/product.service';
import {Router} from '@angular/router';
import {ProductModelServer} from '../../models/product.module';
import {ServerResponse} from '../../models/product.module';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  products: ProductModelServer[] = [];


  constructor(private productService: ProductService,
              private router: Router) { }

  ngOnInit(): void {
    // @ts-ignore
    this.productService.getAllProducts().subscribe((prods: ServerResponse) => {
      this.products = prods.products;
    });
  }

  selectProduct(id: Number) {
    this.router.navigate(['/product', id]).then();
  }
}

