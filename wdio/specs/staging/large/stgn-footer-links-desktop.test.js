const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const footer = require('../../../data/footer-link-response');
const URLS = require('../../../data/urls');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl;
const US_URL = URLS.riverIslandUrls.us.stagingUrl;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl;


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }



describe('UK Homepage footer links are functional', () => {
    it('staging page is displayed' , () => {
        browser.url(UK_URL);
        cookieNotificationBanner.clickCookieNotification();
    });

    it('the correct URL is verified' , () => {
        expect(browser.getUrl()).to.contain(UK_URL);
    });

    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    }); 
     
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    });

    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    });

    it('staging footer urls responses are 200', () => {
        footer.fetchURL();
    })
});


describe('US Homepage footer links are functional', () => {
    it('staging page is displayed' , () => {
        browser.url(US_URL);
    });

    it('the correct URL is verified' , () => {
        expect(browser.getUrl()).to.contain(US_URL);
    });

    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    }); 
     
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    });

    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    });
    
    it('staging footer urls responses are 200', () => {
        footer.fetchURL();
    })
});

     
describe('DE Homepage footer links are functional', () => {
    it('staging page is displayed' , () => {
        browser.url(DE_URL);
    });
    
    it('the correct URL is verified' , () => {
        expect(browser.getUrl()).to.contain(DE_URL);
    });

    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    }); 
     
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    });

    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    });
        
    it('staging footer urls responses are 200', () => {
        footer.fetchURL();
    })
});


describe('IE Homepage footer links are functional', () => {
    it('staging page is displayed' , () => {
        browser.url(IE_URL);
    });
        
    it('the correct URL is verified' , () => {
        expect(browser.getUrl()).to.contain(IE_URL);
    });

    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    }); 
     
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    });

    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    });
            
    it('staging footer urls responses are 200', () => {
        footer.fetchURL();
    })
});