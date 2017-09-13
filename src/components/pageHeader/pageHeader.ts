import { Component } from '@angular/core';
import { ViewChild, Directive, ElementRef, OnDestroy, OnInit, Input } from '@angular/core';
//import { NavController } from 'ionic-angular';
import {SignInPage} from '../../pages/signInPage/signInPage';
import { Router }            from '@angular/router';
declare var $: any


@Component({
  selector: 'page-header',
  templateUrl: 'pageHeader.html',
  styles: [
    `body {
      background-color: #FFFFFF;
    }`,

    `.ui.menu .item img.logo {
      margin-right: 1.5em;
    }`,

    `.main.container {
      margin-top: 7em;
    }`,

    ` .wireframe {
      margin-top: 2em;
    }`,

    `.ui.footer.segment {
      margin: 5em 0em 0em;
      padding: 0em 0em;`,
  ]
})
export class PageHeader implements OnInit {

  //  @ViewChild('descriptionAccordion') descriptionAccordionElementRef: ElementRef;
  @ViewChild('menuPopup1') menuPopup1ElementRef: ElementRef;
  @ViewChild('menuPopup2') menuPopup2ElementRef: ElementRef;
  @ViewChild('menuPopup3') menuPopup3ElementRef: ElementRef;  


  constructor(private router: Router) { }


  ngOnInit() {
    //   $(this.descriptionAccordionElementRef.nativeElement)
    //     .accordion();



    $(this.menuPopup1ElementRef.nativeElement)
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {
          show: 300,
          hide: 300
        },
        lastResort :'bottom left',
        overflow:true,
        setFluidWidth: false,
        //onShow: () => { $('#popup1').css('max-width', $(window).width()); }
      });


    $(this.menuPopup2ElementRef.nativeElement)
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {
          show: 300,
          hide: 300
        },
         lastResort :'bottom left',
         setFluidWidth: false,
        overflow:true,
      });


      $(this.menuPopup3ElementRef.nativeElement)
      .popup({
        inline: true,
        hoverable: true,
        position: 'bottom left',
        delay: {
          show: 300,
          hide: 300
        },
         lastResort :'bottom left',
         setFluidWidth: false,
        overflow:true,
      });
  }

//  goToSignIn(){
     
//      this.router.navigate(['signIn']);

//  }

}
