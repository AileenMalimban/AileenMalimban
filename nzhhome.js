describe('NZH Hompegae',() => {
    it('Opening NZH hompage',async () => {
await browser.url('https://www.nzherald.co.nz/');

//assert title
await expect(browser).toHaveTitle('NZ Herald - Breaking news, latest news, business, sport and entertainment - NZ Herald'); 

        
    });
});

// Clicking Sign in

it('Clicking Sign in',async () => {
    await browser.url('https://www.nzherald.co.nz/');
    
    //assert title
    await $('hme:nav:0:signin').click();

    //assert URL
    await expect(browser).toHaveUrl('https://www.nzherald.co.nz/my-account/identity/'); 
   
    
            
    });

    
