cookieNotificationBanner = require('../../../components/cookie-notification.banner');
homePagePromoBanner = require('../../../components/homepage-promo.banner'); 
const DATES = require('../../../data/date');
const URLS = require('../../../data/urls');
const setDate = DATES[0].date;
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl;
const US_URL = URLS.riverIslandUrls.us.stagingUrl;
const DE_URL = URLS.riverIslandUrls.de.stagingUrl;
const IE_URL = URLS.riverIslandUrls.ie.stagingUrl;


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }

describe('UK Homepage promo banner is displayed', () => {
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

    it('promo banner is displayed', () => {
        homePagePromoBanner.promoBannerIsDisplayed();
    })
});


describe('US Homepage promo banner is displayed', () => {
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
    
    it('promo banner is displayed', () => {
        homePagePromoBanner.promoBannerIsDisplayed();
    });
});


describe('DE Homepage promo banner is displayed', () => {
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
        
    it('promo banner is displayed', () => {
        homePagePromoBanner.promoBannerIsDisplayed();
    });
});


describe('IE Homepage promo banner is displayed', () => {
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
            
    it('promo banner is displayed', () => {
        homePagePromoBanner.promoBannerIsDisplayed();
    })
});
           