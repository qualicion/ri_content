const DATES = require('../../../data/date');
const setDate = DATES[0].date;
const returnsPage = require('../../../page-object/returns.footer.page');
const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const RETURNS_VIA_RI = 'Returning Online Orders via River Island Store'; 
const RETURNS_VIA_COURIER = 'Returning via Royal Mail, Collect+ or Hermes ParcelShop.';
const RETURNS_VIA_PARCEL_COLLECTION = 'Returning via Courier using River Island Parcel Collection';
const RETURN_STORE_ORDERS = 'Returning items purchased or ordered in store';
const RETURNS_PAGE_URL = `/how-can-we-help/returns`;
const CONTACT_US_PAGE = `/how-can-we-help/contact-us`;



const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }



describe('Verify returns page is functional', () => {
    it('returns page is displayed successfully', () => {
        browser.url(RETURNS_PAGE_URL);
        cookieNotificationBanner.clickCookieNotification();
        expect(browser.getUrl()).contain(RETURNS_PAGE_URL);
        expect(returnsPage.returnsHeaderTextIsDisplayed());
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

    it('new returns front label image is displayed', () => {
        assert.equal(true, returnsPage.getReturnsLabelImage(4));
    });

    it('new returns back note image is displayed', () => {
        assert.equal(true, returnsPage.getReturnsLabelImage(5));
    });

    it('UK returns text box is displayed', () => {
        assert.equal(true, returnsPage.typeCountryTextBoxIsDisplayed());
    });

    it('return via RI store accordion text is correct', () => {
        expect(returnsPage.returnsAccordion(1).getText()).to.equal(RETURNS_VIA_RI);
    });

    it('return via RI store accordion is clickable', () => {
        returnsPage.clickReturnsAccordion(1);
    });

    it('return via Collect+, Hermes and Royal Mail accordion text is correct', () => {
        expect(returnsPage.returnsAccordion(3).getText()).to.equal(RETURNS_VIA_COURIER);
    });

    it('return via Collect+, Hermes and Royal Mail accordion is clickable', () => {
        returnsPage.clickReturnsAccordion(3);
    });

    it('verify Collect+, Hermes and Royal Mail cards image are displayed', () => {
        returnsPage.courierCardIsDisplayed(1);
        returnsPage.courierCardIsDisplayed(2);
        returnsPage.courierCardIsDisplayed(3);
    });

    it('verify Collect+, Hermes and Royal Mail card CTAs are displayed', () => {
        returnsPage.courierCardCTAIsDisplayed(1);
        returnsPage.courierCardCTAIsDisplayed(2);
        returnsPage.courierCardCTAIsDisplayed(3);
    });

    it('return via RI parcel collection accordion text is correct', () => {
        expect(returnsPage.returnsAccordion(5).getText()).to.equal(RETURNS_VIA_PARCEL_COLLECTION);
    });

    it('return via RI parcel collection accordion is clickable', () => {
        returnsPage.clickReturnsAccordion(5);
    });

    it('return items purshased or ordered in store accordion text is correct', () => {
        expect(returnsPage.returnsAccordion(7).getText()).to.equal(RETURN_STORE_ORDERS);
    });

    it('return items purshased or ordered in store accordion is clickable', () => {
        returnsPage.clickReturnsAccordion(7);
    });

    it('contact us page is displayed', () => {
        returnsPage.goToContactUsPage();
        expect(browser.getUrl()).contain(CONTACT_US_PAGE);
    })
});