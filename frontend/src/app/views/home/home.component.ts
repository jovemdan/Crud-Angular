import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/components/product/product.model'
import { ProductService } from 'src/app/components/product/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[] = []

  constructor(
    private productService: ProductService
  ) {  }

  

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products.slice(2)
    })
  }
}
