/**
 * container
 * @date 06/11/2024
 * @createdBy wrnunzio
 * @modifiedBy
 * @history
 */
import {LightningElement} from 'lwc';
const tabsConst = [{
    tabid: '',
    isactive: false,
    tabposition: 0,
    tablabel: '',
    tabicon: '',
    tabicondescription: '',
    baseTabClassLi: 'slds-vertical-tabs__nav-item',
    tabClassLiActive: 'slds-is-active',
    ariaControls:'slds-vertical-tabs-',
    anchorIdli:'slds-vertical-tabs-{index}__nav',
    chosenTabClassLi: '',
    tabContentAriaLabelledby: '',
    tabContentHtmlId: 'slds-vertical-tabs-',
}]

export default class Container extends LightningElement {
    /** @type {tabsConst} */
    tabs = [];


    connectedCallback() {
        this.tabs = [
            {
                tabid: 'Opportunities',
                isactive:true,
                tablabel: 'Opportunities',
                tabicon: 'standard:opportunity',
            },
            {
                tabid: 'Cases',
                isactive:false,
                tablabel: 'Cases',
                tabicon: 'standard:case',
            },
        ];
    }


}