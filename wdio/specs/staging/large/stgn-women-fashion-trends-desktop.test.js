const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const page = require('../../../data/page-link-response');
const link = require('../../../data/page-icid-checker');
const URLS = require('../../../data/urls');
const PATH = require('../../../data/path');
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl + PATH.WOMEN_FASHIONS_TREND;
const womenFashionTrendsPage = require('../../../page-object/womens-fashion-trends.page');


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


  describe('UK womens fashion trends page links are functional', () => {
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
    


    describe('UK womens fashion trends page links ICID checker', () => {
        it('all links contain ICID', () => {
        browser.url(UK_URL);
        link.fetchICID();
    })
});
    
     describe('Image slider is displayed', () => {
        it('move to shop suits link' , () => {
            womenFashionTrendsPage.moveToShopsSuitsLink();
        })

        it('image slider is in the viewport' ,  () => {
           womenFashionTrendsPage.getImageSlider();
        })
    })


     describe('Image slider links are functional' , () => {
        it('click on suit link', () => {
            womenFashionTrendsPage.clickSuitsImageSliderLink();
        })

        it('scrolls down to suits component and image is in viewport', () => {
            womenFashionTrendsPage.getSuitsRightImage();
        })

        it('scroll to the bottom of the page', () => {
            womenFashionTrendsPage.moveToShopShoesLink();
        })

        it('click on image slider to scroll back up', () => {
            womenFashionTrendsPage.clickDenimImageSliderLink();
            womenFashionTrendsPage.getDenimImage();       
         })
});
