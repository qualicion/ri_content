class WomensFashionTrendPage {
    get shopSuitsLink(){
        return $('#waypoint > a');
    }

    moveToShopsSuitsLink(){
        this.shopSuitsLink.scrollIntoView();
    }

    get imageSlider(){
        return $('#show > div');
    }

    getImageSlider(){
        this.imageSlider.waitForDisplayed();
        this.imageSlider.isDisplayedInViewport();
        browser.pause(3000);
    }

    get suitsImageSliderLink(){
        return $('#show div div:nth-child(1) a');
    }

    clickSuitsImageSliderLink(){
        this.suitsImageSliderLink.waitForDisplayed();
        this.suitsImageSliderLink.click();
    }

    get suitsRightImage(){
        return $('#suits div.prm1.transform-right-desk.z-indexUp.image a');
    }

    getSuitsRightImage(){
        this.suitsRightImage.waitForDisplayed();
        this.suitsRightImage.isDisplayedInViewport();
    }

    get shopShoesLink(){
        return $('#shoes div.trends-desk-text a');
    }

    moveToShopShoesLink(){
        this.shopShoesLink.scrollIntoView();
    }

    get denimImageSliderLink(){
        return $('#show div div:nth-child(5) a');
    }

    clickDenimImageSliderLink(){
        this.denimImageSliderLink.waitForDisplayed();
        this.denimImageSliderLink.click();
    }
    get denimImage(){
        return $('#denim div div div div.prm5-slide-1.desk-slide.image.slick-slide.slick-current.slick-active > a');
    }

    getDenimImage(){
        this.denimImage.waitForDisplayed();
        this.denimImage.isDisplayedInViewport();
    }
}

module.exports = new WomensFashionTrendPage();