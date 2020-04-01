cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const giftCard = require('../../../page-object/gift-card.page');
const GIFT_CARD_URL = `/how-can-we-help/gift-vouchers-cards`;
const BUY_GIFT_CARD_URL = `https://giftcards.riverisland.com/buy`;
const BUY_DIGITAL_GIFT_CARD_URL = `https://giftcards.riverisland.com/buy-digital`;
const RI_GC_URL = `https://giftcards.riverisland.com/`;


describe('Gift card page is functional', () => {
  it('gift card is displayed', () => {
    browser.url(GIFT_CARD_URL);
    cookieNotificationBanner.clickCookieNotification();
  });

  it('gift header is the displayed', () => {
    giftCard.getGiftCardHeader();
  });

  it('gift card image is displayed', () => {
    giftCard.getGiftCardImage();
  });

  it('digital gift card image is displayed', () => {
    giftCard.getDigitalGiftCardImage();
  });

  it('navigate to giftcard page' , () => {
    giftCard.clickGiftCardLink(); 
  });

  it('gift page is displayed', () => {
    browser.pause(2000);
    expect(browser.getUrl()).to.contain(BUY_GIFT_CARD_URL);
  });

  it('digital gift page is displayed', () => {
    browser.back();
    giftCard.clickBuyDigitalGiftCardLink();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain(BUY_DIGITAL_GIFT_CARD_URL);
  });
  
  it('find out more page is displayed', () => {
    browser.back();
    giftCard.clickFindOutMoreLink();
    browser.pause(2000);
    expect(browser.getUrl()).to.contain(RI_GC_URL);
  })
});