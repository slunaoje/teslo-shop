import { Component, inject } from '@angular/core';
import { rxResource } from '@angular/core/rxjs-interop';
import { ActivatedRoute } from '@angular/router';
import { ProductsService } from '@products/services/products.service';
import { ProductCarouselComponent } from "../../../products/components/product-carousel/product-carousel.component";

@Component({
  selector: 'app-product-page',
  imports: [ProductCarouselComponent],
  templateUrl: './product-page.component.html',
})
export class ProductPageComponent {
  productIdSlug = inject(ActivatedRoute).snapshot.params['idSlug'];
  productsService = inject(ProductsService);

  productResource = rxResource({
    params: () => ({idSlug: this.productIdSlug}),
    stream: ({params}) => this.productsService.getProductByIdSlug(params.idSlug),
  });
}
