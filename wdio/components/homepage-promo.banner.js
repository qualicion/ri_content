class HomepagePromoBanner {
    get promoBanner(){
        return $('.desktop-section.mix-and-match div.top-content-promotion.seasonal-offers.image.content-promotion');
    }
    
    promoBannerIsDisplayed(){
        this.promoBanner.waitForDisplayed();
        this.promoBanner.isDisplayedInViewport();
    }
}
module.exports = new HomepagePromoBanner();