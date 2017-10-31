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
  womenCatArr: { name: string, type: string }[];
  menCatArr: { name: string, type: string }[];

  catagories = ['Women', 'Men', 'Kids', 'Homeware'];
  subCatagories: { name: string, type: string }[];
  
  productsAfterChangeEvent = [];
  productForm: any;



  cntArr: { value: string, desc: string }[];
  cntFlagArr: { value: string, desc: string, flag: string }[];
  birthYearArr: { value: string }[];
  readOnlyMode: boolean = true;
  chosenCatagory: string;


  

  chosenSubCatagory: any;

  @ViewChild('catagoryDropdown') catagoryDropdownElementRef: ElementRef;
  @ViewChild('subCatagoryDropdown') subCatagoryDropdownElementRef: ElementRef;
  @ViewChild('countryDropdown1') countryDropdownElementRef1: ElementRef;


  constructor(utilsServices: UtilsServices, fb: FormBuilder) {
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

    utilsServices.getListOfMenCatagory().subscribe(
      res => { this.menCatArr = res; },
      err => {
        console.error('Register Gov Contract: Error occured on getListOfMenCatagory');
        console.error(err);
      });

    this.productForm = fb.group({
      catagory: [],
      subCatagory: [],
    });

    this.subCatagories = this.womenCatArr.concat(this.menCatArr);
  }

  // Rebuild the product list every time the product type changes.
  typeChanged() {
    const catagory = this.productForm.get('catagory').value;
    this.productsAfterChangeEvent = this.subCatagories.filter(p => p.type == catagory);
  }

  submitForm() {
    console.log('Form Data', this.productForm.value);
    console.log( this.chosenCatagory);
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
      .dropdown({
        setFluidWidth: false,
        overflow: true,
        direction: false,
        keepOnScreen: false
      })
      ;


    $(this.countryDropdownElementRef1.nativeElement)
      .dropdown({
        setFluidWidth: false,
        overflow: true,
        direction: false,
        keepOnScreen: false
      })
      ;
  }


}
