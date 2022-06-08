// Practice E-Commerce Site – Automation Bro
//https://practice.automationbro.com/

describe('Home', () => {
 it ('Open URL & assert title',async () => {
    //Open URL
   await browser.url('https://practice.automationbro.com');

    //Assert title
   await expect(browser).toHaveTitle('Practice E-Commerce Site – Automation Bro');   

 });
});

it ('Open About Page & assert URL',async () => {
   //Open About page
  await browser.url('https://practice.automationbro.com/about/');

   //Assert URL
  await expect(browser).toHaveUrl('https://practice.automationbro.com/about/');   

});

it ('Click get started button and assert URL containing get-started text',async () => {
   //Open Home page
  await browser.url('https://practice.automationbro.com');

   //Click get started button
  (await $('#get-started')).click();

   //Assert URL
  await expect(browser).toHaveUrlContaining('get-started');  
  

});

it ('Click logo and assert URL DOES NOT contain get-started text',async () => {
   //Open Home page
  await browser.url('https://practice.automationbro.com');


   //Click logo
   await $('//img[@alt="Practice E-Commerce Site"]').click()
   //await $('custom-logo-link').click()
   

   //Assert URL
   await expect(browser).not.toHaveUrl('https://practice.automationbro.com');   
   

});

it ('Find element and assert the text', async () => {
  await browser.url('https://practice.automationbro.com');


   //Find elemenmt
   const elementHead = await $('.elementor-widget-container h1')

   //Get text
   const headText = await elementHead.getText();
  

   //Assert text
   //await expect(headText).toEqual('Think different. Make different.');   // come from Jest library
   await expect(elementHead).toHaveText('Think different. Make different.')

});