import { Component } from '@angular/core';
import { ViewChild, Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';
import { UtilsServices } from '../../services/utils.services';

declare var $: any

@Component({
  selector: 'joinPage',
  providers: [UtilsServices],
  templateUrl: 'joinPage.html',
  styles: [
    ``,
  ]
})
export class JoinPage {
  cntArr: { value: string, desc: string }[];
  cntFlagArr: { value: string, desc: string, flag: string }[];
  birthYearArr: { value: string }[];

  @ViewChild('genderDropdown') genderDropdownElementRef: ElementRef;
  @ViewChild('birthYearDropdown') birthYearDropdownElementRef: ElementRef;
  @ViewChild('countryDropdown') countryDropdownElementRef: ElementRef;


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

    $(this.genderDropdownElementRef.nativeElement)
      .dropdown({ setFluidWidth: false,
        overflow: true })
      ;

    $(this.birthYearDropdownElementRef.nativeElement)
      .dropdown({ setFluidWidth: false,
        overflow: true,
        direction: false,
      keepOnScreen: false})
      ;


    $(this.countryDropdownElementRef.nativeElement)
      .dropdown({ setFluidWidth: false,
        overflow: true,
        direction: false,
      keepOnScreen: false})
      ;
  }


}
