describe('Contact', () => {
    it('Fill all the input fields, submit form and assert the success message', async () => {
        await browser.url('/contact');

        //fill out the input fields and click submit
        // addValue - add the text to the input field
        // setValue - it will clearValue then it will addValue

        await $('.contact-name input').addValue('Test Name');
        await $('.contact-email input').addValue('Test@gmail.com');
        await $('.contact-phone input').addValue('12345678');
        await $('.contact-message textarea').addValue('Test only');
        await $('button[type=submit]').click()



        //Assert the success message

        const successAlert = $("[role='alert']");

        await expect(successAlert).toHaveTextContaining('Thanks for contacting us! We will be in touch with you shortly')


    });
});