import { Component } from '@angular/core';
import { ViewChild, Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';
import { UtilsServices } from '../../services/utils.services';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';


declare var $: any

@Component({
  selector: 'addReviewPage',
  providers: [UtilsServices],
  templateUrl: 'addReview.html',
  styles: [
    ``,
  ]
})
export class AddReviewPage {
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



  cntArr: { value: string, desc: string }[];
  womenCatArr: { value: string, desc: string }[];
  cntFlagArr: { value: string, desc: string, flag: string }[];
  birthYearArr: { value: string }[];
  readOnlyMode:boolean=true;
  chosenCatagory: any= "lala";
  
  
  // console.log( this.chosenCatagory);
  
  chosenSubCatagory : any;

  @ViewChild('catagoryDropdown') catagoryDropdownElementRef: ElementRef;
  @ViewChild('subCatagoryDropdown') subCatagoryDropdownElementRef: ElementRef;
  @ViewChild('countryDropdown1') countryDropdownElementRef1: ElementRef;


  constructor(utilsServices: UtilsServices,fb: FormBuilder) {
    utilsServices.getListOfCountries().subscribe(
      res => { this.cntFlagArr = res; },
      err => {
        console.error('Register Gov Contract: Error occured on getListOfCountries');
        console.error(err);
      });

      utilsServices.getListofBirthYear().subscribe(
      res => { this.birthYearArr = res; },
      err => {
        console.error('Register Gov Contract: Error occured on getListofBirthYear');
        console.error(err);
      });

      utilsServices.getListOfWomenCatagory().subscribe(
        res => { this.womenCatArr = res; },
        err => {
          console.error('Register Gov Contract: Error occured on getListOfWomenCatagory');
          console.error(err);
        });
    
        this.productForm = fb.group({
          productType: [],
          product: [],
          product2: []
      });
    // this.cntFlagArr.forEach(country => {
    //   country.flag = country.value + ' flag';
    // });

  }


  

  
  // Rebuild the product list every time the product type changes.
  typeChanged() {
      const productType = this.productForm.get('productType').value;
      this.productsAfterChangeEvent = this.allProducts.filter(p => p.type == productType);
  }

  submitForm() {
      console.log('Form Data', this.productForm.value);
  }



  ngOnInit() {

    $(this.catagoryDropdownElementRef.nativeElement)
      .dropdown({ 
        setFluidWidth: false,
        direction: false,
        overflow: true 
      
      })
      ;

    $(this.subCatagoryDropdownElementRef.nativeElement)
      .dropdown({ setFluidWidth: false,
        overflow: true,
        direction: false,
        keepOnScreen: false})
      ;


    $(this.countryDropdownElementRef1.nativeElement)
      .dropdown({ setFluidWidth: false,
        overflow: true,
        direction: false,
        keepOnScreen: false})
      ;
  }


}
