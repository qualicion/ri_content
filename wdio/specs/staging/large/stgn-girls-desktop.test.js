cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const newsletterModal = require('../../../components/newsletter-modal.js')
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const page = require('../../../data/page-link-response');
const link = require('../../../data/page-icid-checker');
const URLS = require('../../../data/urls');
const DIVISION = require('../../../data/division');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl + DIVISION.GIRLS;
const US_URL = URLS.riverIslandUrls.us.stagingUrl + DIVISION.GIRLS;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl + DIVISION.GIRLS;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl + DIVISION.GIRLS;
    


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


  describe('UK Girls landing page links are functional', () => {
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


describe('UK Girls landing page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(UK_URL);
        link.fetchICID();
    })
});



describe('US Girls landing page links are functional', () => {
    it('US staging homepage is displayed', () => {
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
    
      
describe('US Girls landing page links ICID checker', () => {
    it('should return all links with ICID', () => {
        browser.url(US_URL);
        link.fetchICID();
    })
});


describe('DE Girls landing page links are functional', () => {
    it('DE staging homepage is displayed', () => {
        browser.url(DE_URL);
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
    
    
describe('DE Girls landing page links ICID checker', () => {
    it('should return all links with ICID', () => {
        browser.url(DE_URL);
        link.fetchICID();
    })
});


describe('IE Girls landing page links are functional', () => {
    it('IE staging homepage is displayed', () => {
        browser.url(IE_URL);
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
    
    
describe('IE Girls landing page links ICID checker', () => {
    it('should return all links with ICID', () => {
        browser.url(IE_URL);
        link.fetchICID();
    })
});
