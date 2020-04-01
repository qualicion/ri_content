cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const newsletterModal = require('../../../components/newsletter-modal.js');
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const page = require('../../../data/page-link-response');
const link = require('../../../data/page-icid-checker');
const URLS = require('../../../data/urls');
const DIVISION = require('../../../data/division');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl + DIVISION.MEN;
const US_URL = URLS.riverIslandUrls.us.stagingUrl + DIVISION.MEN;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl + DIVISION.MEN;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl + DIVISION.MEN;


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


describe('UK Mens landing page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(UK_URL);
        cookieNotificationBanner.clickCookieNotification();
    })
    
    it('tommorows date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    })

    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    })

    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    })
    
    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});


describe('UK Mens landing page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(UK_URL);
        link.fetchICID();
    })
});


describe('US Mens landing page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(US_URL);
        newsletterModal.clickNewsletterModalCloseBtn();
    })
        
    it('tommorows date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    })
    
    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    })
    
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    })
        
    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});
    
    
describe('US Mens landing page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(US_URL);
        link.fetchICID();
    })
});


describe('DE Mens landing page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(DE_URL);
        cookieNotificationBanner.clickCookieNotification();
    })
        
    it('tommorows date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    })
    
    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    })
    
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    })
        
    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});
    

describe('DE Mens landing page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(DE_URL);
        link.fetchICID();
    })
});


describe('IE Mens landing page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(IE_URL);
        cookieNotificationBanner.clickCookieNotification();
    });
        
    it('tommorows date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    });
    
    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    });
    
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    });
        
    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});
    
    
describe('IE Mens landing page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(IE_URL);
        link.fetchICID();
    })
});