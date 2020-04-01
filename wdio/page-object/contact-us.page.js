class ContactUsPage {
    get contactUsHeader(){
        return $('#page h1');
    }

    contactUsHeaderIsDisplayed(){
        this.contactUsHeader.waitForDisplayed();
        return this.contactUsHeader.isDisplayedInViewport();
    }
}
module.exports = new ContactUsPage();