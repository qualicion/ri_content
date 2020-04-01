class NewsLetterModal {
    get newsletterModalCloseBtn(){
        return $('#NewsletterSignUp div');
    }

    clickNewsletterModalCloseBtn(){
        this.newsletterModalCloseBtn.waitForDisplayed();
        this.newsletterModalCloseBtn.click();
    }
}


module.exports = new NewsLetterModal();