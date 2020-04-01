class CookieNotificationBanner{
    get cookieNotification(){
        return $('.cookie-notification-banner__cta.btn.ui-primary');
    }

    clickCookieNotification(){
        this.cookieNotification.waitForDisplayed();
        this.cookieNotification.click();
    }

}

module.exports = new CookieNotificationBanner();