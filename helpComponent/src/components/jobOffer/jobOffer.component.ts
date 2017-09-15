import { Component, Input, ViewChildren, QueryList } from '@angular/core';
import { JobOfferInterface } from '../interfaces/jobOffer.interface';
import { PageResolver } from '../../utils/page.resolver';
import { EligibleJobOffers } from './eligibleJobOffers.component';
import { ButtonsInterface } from '../interfaces/uiElements/buttons.interface';
import { NavController } from 'ionic-angular';
import { FieldTypeEnum } from '../interfaces/fieldMetadata.interface';
import { RepresentationComponent } from '../dynamicFields/representation/representation.component';
import { DynamicFieldsValuesInterface, FieldMetadataValueInterface } from '../interfaces/fieldMetadata.interface';
import { getFormattedTime } from '../../utils/utils';

@Component({
    selector: 'joboffer',
    templateUrl: 'jobOffer.component.html',
    styles: [
        `.ui.huge.message.noshadow {margin: 0; min-height: 100%; box-shadow: none;}`,
        `.field-content {line-height: 98%;}`
    ]
})
export class JobOffer {
    @Input() jobOffer: JobOfferInterface;
    @Input() buttons?: ButtonsInterface;
    @Input() dynamicFieldsWithValues?: FieldMetadataValueInterface; //if true  - will show the values of dynamic fields, otherwise lets to fill the values of dynamic fields

    @ViewChildren("field") dynamicFieldsQueryList: QueryList<RepresentationComponent>;

    isMobile: boolean;
    eligibleJobOfferComponent: EligibleJobOffers = null;

    FieldTypeEnum = FieldTypeEnum; //required in order to use it in the html template
    getFormattedTime: Function = getFormattedTime; //required in order to use it in the html template

    requestSubmitted: boolean = false;

    constructor(pageResolver: PageResolver, private nav: NavController) {
        this.isMobile = pageResolver.isMobile();
    }

    popView = (): void => {
        this.nav.pop();
    }

    isValid(): boolean {
        //TODO: implement
        return true;
    }

    getDynamicFieldsValues(): DynamicFieldsValuesInterface {
        let dynamicFieldsValues: DynamicFieldsValuesInterface = <DynamicFieldsValuesInterface>{};
        dynamicFieldsValues.dynamicFields = {};

        this.dynamicFieldsQueryList.forEach(element => {
            dynamicFieldsValues.dynamicFields[element.fieldMetadata.name] = element.getData();
        });

        return dynamicFieldsValues;
    }
}