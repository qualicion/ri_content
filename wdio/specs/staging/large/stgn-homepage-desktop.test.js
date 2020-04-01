const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const page = require('../../../data/page-link-response');
const link = require('../../../data/page-icid-checker');
const URLS = require('../../../data/urls');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl;
const US_URL = URLS.riverIslandUrls.us.stagingUrl;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl;

const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


describe('UK Homepage links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(UK_URL);
        cookieNotificationBanner.clickCookieNotification();
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

    it('all urls responses are 200', () => {
        page.fetchURL();
    })    
});


describe('UK Homepage links ICID checker', () => {
    it('should return all links without ICID', () => {
        browser.url(UK_URL);
        link.fetchICID();
    })
});


describe('US Homepage links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(US_URL);
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
    
    it('all urls responses are 200', () => {
        page.fetchURL();
    })
});
    
    
describe('US Homepage links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(US_URL);
        link.fetchICID();
    })
});


describe('DE Homepage links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(DE_URL);
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
    
    it('all urls responses are 200', () => {
        page.fetchURL();
    })
});
    
    
describe('DE Homepage links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(DE_URL);
        link.fetchICID();
    })
});


describe('IE Homepage links are functional', () => {
    it('staging homepage is displayed', () => {
        browser.url(IE_URL);
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
    
    it('all urls responses are 200', () => {
        page.fetchURL();
    })
});

    
describe('IE Homepage links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(IE_URL);
        link.fetchICID();
    })
});