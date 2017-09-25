import { Component } from '@angular/core';
import { ViewChild, Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';
import { UtilsServices } from '../../services/utils.services';

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
  cntArr: { value: string, desc: string }[];
  cntFlagArr: { value: string, desc: string, flag: string }[];
  birthYearArr: { value: string }[];

  @ViewChild('genderDropdown1') genderDropdownElementRef1: ElementRef;
  @ViewChild('birthYearDropdown1') birthYearDropdownElementRef1: ElementRef;
  @ViewChild('countryDropdown1') countryDropdownElementRef1: ElementRef;


  constructor(utilsServices: UtilsServices) {
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

    // this.cntFlagArr.forEach(country => {
    //   country.flag = country.value + ' flag';
    // });

  }






  ngOnInit() {

    $(this.genderDropdownElementRef1.nativeElement)
      .dropdown({ setFluidWidth: false,
        overflow: true })
      ;

    $(this.birthYearDropdownElementRef1.nativeElement)
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
