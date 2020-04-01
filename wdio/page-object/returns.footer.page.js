class ReturnsPage {
    get returnsHeader(){
        return $('.ui-display');
    }

    returnsHeaderTextIsDisplayed(){
        this.returnsHeader.waitForDisplayed();
        this.returnsHeader.isDisplayedInViewport();
    }

    returnsLabelImage(index){
        return $(`.returns-indent p:nth-child(${index}) img`);
    }

    getReturnsLabelImage(index){
        this.returnsLabelImage(index).waitForDisplayed();
        return this.returnsLabelImage(index).isDisplayedInViewport();
    }

    get typeCountryTextBox(){
        return $('p:nth-child(2) input');
    }

    typeCountryTextBoxIsDisplayed(){
        this.typeCountryTextBox.click();
        return this.typeCountryTextBox.isDisplayedInViewport();
    }

    returnsAccordion(index){
        return $(`#uk h3:nth-child(${index})`);
    }

    clickReturnsAccordion(index){
        this.returnsAccordion(index).click();
    }

    getReturnsContent(index){
        return $(`#uk div:nth-child(${index})`);
    }

    returnsContentIsDisplayed(index){
        return this.getReturnsContent(index).isDisplayed();
    }

    getCourierCards(index){
        return $(`#returns-logos li:nth-child(${index}) div`);
    }

    courierCardIsDisplayed(index){
        return this.getCourierCards(index).isDisplayedInViewport();
    }

    getCourierCardsCTA(index){
        return $(`#returns-logos li:nth-child(${index}) a`)
    }

    courierCardCTAIsDisplayed(index){
        return this.getCourierCardsCTA(index).isDisplayedInViewport();
    }

    get contactUsLink(){
        return $('section:nth-child(16) p:nth-child(6) a');
    }

    goToContactUsPage(){
        this.contactUsLink.click();
        browser.pause(2000);
    }
}

module.exports = new ReturnsPage();