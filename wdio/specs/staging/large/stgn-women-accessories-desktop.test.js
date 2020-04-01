cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const page = require('../../../data/page-link-response');
const link = require('../../../data/page-icid-checker');
const URLS = require('../../../data/urls');
const PATH = require('../../../data/path');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl + PATH.WOMEN_ACCESSORIES;
const US_URL = URLS.riverIslandUrls.us.stagingUrl + PATH.WOMEN_ACCESSORIES;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl + PATH.WOMEN_ACCESSORIES;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl + PATH.WOMEN_ACCESSORIES;


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


describe('UK womens accessories page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(UK_URL);
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
    
    
describe('UK womens accessories page links ICID checker', () => {
    it('all links contain ICID', () => {
    browser.url(UK_URL);
    link.fetchICID();
    })
});

    
describe('US womens accessories page links are functional', () => {
    it('landing page is displayed', () => {
    browser.url(US_URL);   
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

    
describe('US womens accessories page links ICID checker', () => {
    it('all links contain ICID', () => {
    browser.url(US_URL);
    link.fetchICID();
    })
});


describe('DE womens accessories page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(DE_URL);   
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


describe('DE womens accessories page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(DE_URL);
        link.fetchICID();
    })
});

       

describe('IE womens accessories page links are functional', () => {
    it('landing page is displayed', () => {
        browser.url(IE_URL);   
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


describe('IE womens accessories page links ICID checker', () => {
    it('all links contain ICID', () => {
        browser.url(IE_URL);
        link.fetchICID();
    })
});
