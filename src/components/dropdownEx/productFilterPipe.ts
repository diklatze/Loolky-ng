import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'productFilter'})
export class ProductFilterPipe implements PipeTransform {
  transform(products: any[], productType: string): any[] {
    return products.filter(p => p.type == productType);
  }
}
