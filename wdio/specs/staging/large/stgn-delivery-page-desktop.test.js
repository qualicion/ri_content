const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const deliveryPage = require('../../../page-object/delivery.footer.page');
const DELIVERY_PAGE_URL = `/how-can-we-help/delivery`;

const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


describe('Verify delivery page is functional', () => {
    it('delivery page is displayed successfully', () => {
      browser.url(DELIVERY_PAGE_URL);
      cookieNotificationBanner.clickCookieNotification();
    });

    it('the correct URL is verified' , () => {
      expect(browser.getUrl()).contain(DELIVERY_PAGE_URL);
      expect(deliveryPage.deliveryPageHeaderTextIsDisplayed());
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

  it('standard delivery type is correct', () => {
    assert.equal(deliveryPage.getStandardDeliveryType(), 'Standard delivery');
  });

  it('standard delivery price is correct', () => {
    assert.equal(deliveryPage.getStandardDeliveryPrice(), 'Free');
  });

  it('standard delivery time is correct', () => {
    assert.equal(deliveryPage.getStandardDeliveryTime(), '3-4 days*');
  });

  it('standard delivery accordion is clickable', () => {
    deliveryPage.clickStandardDeliveryAccordion();
  })
});