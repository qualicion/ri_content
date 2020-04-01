class DeliveryPage{
    get deliveryPageHeader(){
        return $('.delivery-page');
    }

    deliveryPageHeaderTextIsDisplayed(){
        this.deliveryPageHeader.waitForDisplayed();
        this.deliveryPageHeader.isDisplayedInViewport();
    }

    get standardDeliveryType(){
        return $('.standard-delivery.delivery-accordion.ui-btn-accordion.arrow-down p.delivery-type');
    }

    getStandardDeliveryType(){
        this.standardDeliveryType.waitForDisplayed();
        return this.standardDeliveryType.getText();
    }

    get standardDeliveryPrice(){
        return $('.standard-delivery.delivery-accordion.ui-btn-accordion.arrow-down p.delivery-price');
    }

    getStandardDeliveryPrice(){
        this.standardDeliveryPrice.waitForDisplayed();
        return this.standardDeliveryPrice.getText();
    }

    get standardDeliveryTime(){
        return $('.standard-delivery.delivery-accordion.ui-btn-accordion.arrow-down p.delivery-time');
    }

    getStandardDeliveryTime(){
        this.standardDeliveryTime.waitForDisplayed();
        return this.standardDeliveryTime.getText();
    }

    get standardDeliveryAccordion(){
        return $('.standard-delivery.delivery-accordion.arrow-down.ui-btn-accordion');
    }

    clickStandardDeliveryAccordion(){
        this.deliveryPageHeader.scrollIntoView();
        this.standardDeliveryAccordion.click();
    }    
}

module.exports = new DeliveryPage();