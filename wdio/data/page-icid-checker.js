const fetch = require('node-fetch');

class PageICIDChecker{
    fetchICID(){
        const links = $$('.desktop-section.mix-and-match a');
        const urls = links.map(link => link.getAttribute('href'));
        
        console.log(urls);
               
        let responses;
        
        browser.call(async () => {
            const requests = urls.map(url => fetch(url)); 
                return responses = await Promise.all(requests);
        });
        
        expect(responses.length).to.be.equal(urls.length);
            let wrongLinks = [];
                urls.forEach(response => {
                    if (!response.includes('icid=') && (!response.includes('imwearingri'))) {
                        wrongLinks.push(response);
                    }

                    if (wrongLinks.length > 0){
                    console.log('wrong links' + wrongLinks);
                    }
                })
                    expect(wrongLinks.length).to.equal(0);
            }
        }

module.exports = new PageICIDChecker();