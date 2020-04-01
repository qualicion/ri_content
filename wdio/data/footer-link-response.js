const fetch = require('node-fetch');


class FootLinkResponse{
    fetchURL(){
        const links =  $$('.footer-container a'); 
        const urls = links.map(link => link.getAttribute('href'))
            .filter((url) => {
                return (url !== null && url.length > 0)
            }); 
    
        console.log(urls);
    
        let responses;
           
            
        browser.call(async () => {
            const requests = urls.map(url => fetch(url));
                return responses = await Promise.all(requests);
        })
            
        console.log(responses);
                    
            responses.forEach(response => {
                expect(response.status).to.be.equal(200);
            })    
        }
    }
module.exports = new FootLinkResponse();