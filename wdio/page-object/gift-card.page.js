class GiftCard{
    get giftCardHeader(){
        return $('.desktop-section div:nth-child(1) h1');
    }

    getGiftCardHeader(){
        this.giftCardHeader.scrollIntoView();
       return this.giftCardHeader.isDisplayedInViewport();
    }

    get giftCardImage(){
        return $('.column-1 div a img');
    }

    getGiftCardImage(){
        this.giftCardImage.waitForDisplayed();
        return this.giftCardImage.isDisplayedInViewport();
    }

    get digitalGiftCardImage(){
        return $('.column-2 div a img');
    }

    getDigitalGiftCardImage(){
        this.digitalGiftCardImage.waitForDisplayed();
        this.digitalGiftCardImage.isDisplayedInViewport();
    }

    get buyNowGiftCardLink(){
        return $('section.desktop-section div:nth-child(2) div.column-1 > a');
    }

    clickGiftCardLink(){
        this.buyNowGiftCardLink.waitForDisplayed();
        this.buyNowGiftCardLink.click();
    }  

    get buyDigitGiftCardLink(){
        return $('div:nth-child(2) div.column-2 > a');
    }

    clickBuyDigitalGiftCardLink(){
        this.buyDigitGiftCardLink.waitForDisplayed();
        this.buyDigitGiftCardLink.click();
    }

    get findOutMore(){
        return $('.desktop-section div:nth-child(4) a');
    }

    clickFindOutMoreLink(){
        this.findOutMore.waitForDisplayed();
        this.findOutMore.click();
    }
}

module.exports = new GiftCard();