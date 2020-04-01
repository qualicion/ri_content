const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const newsletterModal = require('../../../components/newsletter-modal.js')
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const page = require('../../../data/page-link-response');
const link = require('../../../data/page-icid-checker');
const URLS = require('../../../data/urls');
const PATH = require('../../../data/path');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl + PATH.SALE;
const US_URL = URLS.riverIslandUrls.us.stagingUrl + PATH.SALE;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl + PATH.SALE;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl + PATH.SALE;


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }



describe('UK Sale page links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(UK_URL);
        cookieNotificationBanner.clickCookieNotification();
    })
    

    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    })
     
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    })

    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    })

    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});



describe('UK Sale links ICID checker', () => {
    it('all links have ICID', () => {
        browser.url(UK_URL);
        link.fetchICID();
    })
});


describe('US Sale page links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(US_URL);
        newsletterModal.clickNewsletterModalCloseBtn();
    })
        
    
    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    })
         
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    })
    
    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    })
    
    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});

    
    
    
describe('US Sale links ICID checker', () => {
    it('all links have ICID', () => {
        browser.url(US_URL);
        link.fetchICID();
    })
});

        

describe('DE Sale page links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(DE_URL);
    })
                     
    it('date is selected in the calendar', () => {
        clickWithJS('.edit-close');
        const date = $('#embargoDate');
        date.waitForDisplayed();
        date.setValue(setDate);
    })
                 
    it('selected date is set', () => {
        clickWithJS('.embargo-date button');
    })
            
    it('selected date is verified', () => {
        const date = $('#embargoDate');
        assert.equal(date.getValue(), setDate);
    })
            
    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});
            
               
describe('DE Sale links ICID checker', () => {
    it('all links have ICID', () => {
        browser.url(DE_URL);    
        link.fetchICID();
    })
});


describe('IE Sale page links are functional', () => {
        it('staging homepage is displayed', () => {
            browser.url(IE_URL);
        })
                         
        it('date is selected in the calendar', () => {
            clickWithJS('.edit-close');
            const date = $('#embargoDate');
            date.waitForDisplayed();
            date.setValue(setDate);
        })
                     
        it('selected date is set', () => {
            clickWithJS('.embargo-date button');
        })
                
        it('selected date is verified', () => {
            const date = $('#embargoDate');
            assert.equal(date.getValue(), setDate);
        })
                
        it('all urls responses are 200', () => {
            page.fetchURL();
        })    
    });
    
                         
describe('IE Sale links ICID checker', () => {
    it('all links have ICID', () => {
        browser.url(DE_URL);   
        link.fetchICID();
    })
});