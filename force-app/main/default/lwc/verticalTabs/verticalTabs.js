/**
 * verticalTabs
 * @date 11/11/2024
 * @createdBy wrnunzio
 * @modifiedBy
 * @history
 */
import {api, LightningElement, track} from 'lwc';


const tabsConst = [{
    /* da passare tramite property API */
    tabid: '',
    isactive: false,
    tablabel: '',
    tabicon: '',
    tabicondescription: '',

    /*tecniche*/
    baseTabClassLi: 'slds-vertical-tabs__nav-item',
    tabClassLiActive: 'slds-is-active',
    ariaControls: 'slds-vertical-tabs-',
    anchorIdli: 'slds-vertical-tabs-{index}__nav',
    chosenTabClassLi: '',
    tabContentAriaLabelledby: '',
    tabContentHtmlId: 'slds-vertical-tabs-',
    tabContentShowClass: 'slds-show',
    tabContentHideClass: 'slds-hide',
}]

export default class VerticalTabs extends LightningElement {
    /** @type {tabs} */
    @track _tabs = [];
    _showSpinner = false;


    @api set tabs(tabs) {
        if (!tabs) return;
        this.showSpinner = true;
        this._tabs = this.parsefy(tabs);
        this._tabs.map((tab, index) => {
            tab.baseTabClassLi = tabsConst[0].baseTabClassLi;
            tab.tabClassLiActive = tabsConst[0].tabClassLiActive;
            tab.tabClassLiActive = tabsConst[0].tabClassLiActive;
            tab.tabicondescription = tabsConst[0].tabicondescription;
            tab.tabContentShowClass = tabsConst[0].tabContentShowClass;
            tab.tabContentHideClass = tabsConst[0].tabContentHideClass;
            tab.ariaControls = tabsConst[0].ariaControls + index;
            tab.tabContentHtmlId = tabsConst[0].ariaControls + index;
            tab.anchorIdli = tabsConst[0].anchorIdli.replace('{index}', index);
            tab.tabContentAriaLabelledby = tab.anchorIdli;
            tab.chosenTabClassLi = tab.isactive ? tab.baseTabClassLi + ' ' + tab.tabClassLiActive : tab.baseTabClassLi;
        })
        console.log('this._tabs', this._tabs);

        //interval necessario anche per prevedere un eventuale caricamento lento
        let interval = setInterval(() => {
            for (let tab of this._tabs) {
                if (tab.isactive) {

                    console.log('active tab', tab)

                    let allTabContent = this.querySelectorAll('div[data-tabidcontent]');

                    for (let tabContent of allTabContent) {
                        tabContent.classList.remove(tab.tabContentShowClass);
                        tabContent.classList.remove(tab.tabContentHideClass);
                        tabContent.classList.add(tab.tabContentHideClass);
                    }
                    let currentTabContent = this.querySelector('div[data-tabidcontent="' + tab.tabid + '"]');

                    if (allTabContent && allTabContent.length > 0) {
                        clearInterval(interval);
                    }
                    currentTabContent?.classList?.add(tab.tabContentShowClass);
                    currentTabContent?.classList?.remove(tab.tabContentHideClass);

                    break;
                }
            }


            let allTabContents = this.querySelectorAll('div[data-tabidcontent]');
            for (let tabcontent of allTabContents) {
                for (let tab of this._tabs) {
                    if (tab.tabid == tabcontent.dataset.tabidcontent) {
                        tabcontent.setAttribute('aria-labelledby', tab.anchorIdli);
                        tabcontent.setAttribute('id', tab.ariaControls);
                    }
                }
            }
            let allTab = this.template.querySelectorAll('a[data-tabida]');
            for (let tabelment of allTab) {
                for (let tab of this._tabs) {
                    if (tab.tabid == tabelment.dataset.tabida) {
                        tabelment.setAttribute('aria-controls', tab.ariaControls);
                        tabelment.setAttribute('id', tab.anchorIdli);
                    }
                }
            }

            this.showSpinner = false;
        }, 150);
    }

    get tabs() {
        return this._tabs;
    }

    @api set showSpinner(show) {
        this._showSpinner = show;
    }

    get showSpinner() {
        return this._showSpinner
    }

    connectedCallback() {
    }


    async setTabActive(event) {

        let tabid = event.target?.dataset?.tabida !== undefined ? event.target?.dataset?.tabida : event.target?.parentElement?.dataset?.tabida;

        console.log('tab clicked-tabid ', tabid)

        this.showSpinner = true;
        await this.deactivateAllTab();

        await new Promise((resolve, reject) => {
            let currentTab = this.template.querySelector('li.slds-vertical-tabs__nav-item[data-tabidli="' + tabid + '"]');
            currentTab.classList.add('slds-is-active');

            let currentTabAchor = this.template.querySelector('a[data-tabida="' + tabid + '"]');
            currentTabAchor.setAttribute('aria-selected', true);

            let currentTabContent = this.querySelector('div[data-tabidcontent="' + tabid + '"]');
            currentTabContent?.classList?.remove('slds-hide');
            currentTabContent?.classList?.add('slds-show');
            this.showSpinner = false;
            resolve()
        })


    }

    deactivateAllTab() {
        this.showSpinner = true;
        return new Promise((resolve, reject) => {
            let allAnchorTabs = this.template.querySelectorAll('li.slds-vertical-tabs__nav-item.slds-is-active');
            for (let tab of allAnchorTabs) {
                tab.classList.remove('slds-is-active');
                tab.setAttribute('aria-selected', false);
            }
            let allContentTabs = this.querySelectorAll('div.slds-show[data-tabidcontent]');
            //console.log('####' + allContentTabs.length);
            for (let tab of allContentTabs) {
                tab.classList.remove('slds-show');
                tab.classList.add('slds-hide');
            }
            this.showSpinner = false;
            resolve();
        })
    }

    parsefy(s) {
        return JSON.parse(JSON.stringify(s));
    }

}
