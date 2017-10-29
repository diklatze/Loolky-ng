import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
    selector: 'dropdownEx',
    templateUrl: 'dropdownEx.html',
    styles: [
        ``,
    ]
})
export class DropdownEx {


    productTypes = ['small', 'large'];
    allProducts = [
        { name: 'SmallWidget1', type: 'small' },
        { name: 'SmallWidget2', type: 'small' },
        { name: 'SmallWidget3', type: 'small' },
        { name: 'LargeWidget1', type: 'large' },
        { name: 'LargeWidget2', type: 'large' }
    ];
    productsAfterChangeEvent = [];
    productForm: any;

    constructor(fb: FormBuilder) {
        this.productForm = fb.group({
            productType: [],
            product: [],
            product2: []
        });
    }

    // Rebuild the product list every time the product type changes.
    typeChanged() {
        const productType = this.productForm.get('productType').value;
        this.productsAfterChangeEvent = this.allProducts.filter(p => p.type == productType);
    }

    submitForm() {
        console.log('Form Data', this.productForm.value);
    }
}

