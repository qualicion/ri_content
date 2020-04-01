const cookieNotificationBanner = require('../../../components/cookie-notification.banner');
const megaMenu = require('../../../components/mega-menu');
const fetch = require('node-fetch');
const DATES = require('../../../data/date');
const URLS = require('../../../data/urls');
const setDate = DATES[0].date;
const UK_URL = URLS.riverIslandUrls.uk.stagingUrl;


const clickWithJS = (element) => {
    browser.execute("window.jQuery('" + element + "').click()");
  }


describe('Check all links on the mega menu are functional', () => {
        let responses;
    
    it('Navigate to the homepage', ()=> {
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

    it('all Womens category link urls responses are 200', () => {
        const links =  megaMenu.getLinks('Women');
        const urls = links.map(link => link.getAttribute('href'));
        console.log(urls);

        browser.call(async () => {
            const requests = urls.map(url => fetch(url));
            return responses = await Promise.all(requests);
    })
        
        console.log(responses);
        
        expect(responses.length).to.be.equal(links.length);
        responses.forEach(response => {
            expect(response.status).to.be.equal(200);
        })     
    });


    it('all Mens category link urls responses are 200', () => {
        const links =  megaMenu.getLinks('Men');
        const urls = links.map(link => link.getAttribute('href'));
        console.log(urls);


        browser.call(async () => {
            const requests = urls.map(url => fetch(url));
            return responses = await Promise.all(requests);
    })
        
        console.log(responses);
        
        expect(responses.length).to.be.equal(links.length);
        responses.forEach(response => {
            expect(response.status).to.be.equal(200);
        })     
    });

    it('all Girls category link urls responses are 200', () => {
        const links =  megaMenu.getLinks('Girls');
        const urls = links.map(link => link.getAttribute('href'));
        console.log(urls);

        browser.call(async () => {
            const requests = urls.map(url => fetch(url));
            return responses = await Promise.all(requests);
    })
        
        console.log(responses);
        
        expect(responses.length).to.be.equal(links.length);
        responses.forEach(response => {
            expect(response.status).to.be.equal(200);
        })     
    });

    it('all Boys category link urls responses are 200', () => {
        const links =  megaMenu.getLinks('Boys');
        const urls = links.map(link => link.getAttribute('href'));
        console.log(urls);

        browser.call(async () => {
            const requests = urls.map(url => fetch(url));
            return responses = await Promise.all(requests);
    })
        
        console.log(responses);
        
        expect(responses.length).to.be.equal(links.length);
        responses.forEach(response => {
            expect(response.status).to.be.equal(200);
        })     
    })
});