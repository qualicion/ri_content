const fetch = require('node-fetch');

class PageLinkResponse {
    fetchURL(){
        const links =  $$('.desktop-section.mix-and-match a'); 
        const urls = links.map(link => link.getAttribute('href'));
        
        console.log(urls);

        let responses;

        browser.call(async () => {
            const requests = urls.map(url => fetch(url));
            return responses = await Promise.all(requests);
    });
        
        console.log(responses);
        
        expect(responses.length).to.be.equal(links.length);
        responses.forEach(response => {
            expect(response.status).to.be.equal(200);
     })    
    }  
}
module.exports = new PageLinkResponse();