import { Component, OnInit } from '@angular/core'
import { Product } from 'src/app/components/product/product.model'
import { HeaderService } from 'src/app/components/template/header/header.service'
import { ProductService } from 'src/app/components/product/product.service'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  products: Product[]
  constructor(
    private headerService: HeaderService,
    private productService: ProductService
  ) {
    headerService.headerData = {
      title: 'Início',
      icon: 'home',
      routeUrl: '',
    }
  }

  ngOnInit(): void {
    this.productService.read().subscribe((products) => {
      this.products = products
      console.log(products)
    })
  }
}
