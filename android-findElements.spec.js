describe('Android Elements Tests', () => {
    it('Find element by accesibility ID',async () => {
        // find element by accesibilty id
        const appOption = await $('~App')
        //click on element
        await appOption.click();

        // assertion
        actionBar = await $('~Action Bar');
        await expect(actionBar).toBeExisting();

    });    



    it('Find element by class name',async () => {
        // find element by accesibilty id
        const className = await $('android.widget.TextView')
      
        console.log(await className.getText());
        // assertion
        await expect(className).toHaveText('API Demos');

    });    


        it ('find elements by xpath', async () => {
            //xpath -(//tagname[@attribute=value])
            // tagname  = class name, textview or button, added text
            //@attribute is = text, content description resource ID
            // value = actual value for that particular attribute
             await $('//android.widget.TextView[@content-desc="Alert Dialogs"]').click();

            //find by resourceid
            await $('//android.widget.Button[@resource-id="io.appium.android.apis:id/select_button"]').click();

            //find element by text
            await $('//android.widget.TextView[@text="Command two"]').click();
            
            //find element by class
            const textAssertion = await $('//android.widget.TextView')
            await expect(textAssertion).toHaveText("You selected: 1 , Command two");

        });


    it('Find multiple elements',async() => {

       const expectedLIst = ['API Demos',"Access'ibility",'Accessibility','Animation','App','Content',
        'Graphics','Media','NFC','OS','Preference','Text','Views']

        const actualList = []

        //find multiple elements

       const textList = await $$('android.widget.TextView');


        //loop through all of them
        for (const element of textList){
            actualList.push(await element.getText());
            
        }

        //assert the list
        await expect (actualList).toEqual(expectedLIst)
    });

    //Exercise text Field
    //Access text field screen using any selector strategy
    // views > auto complete > screen top

    it.only('Access text field Views > Auto Complete > Screen top', async () => {
       
        //access the auto complete screen
        await $('~Views').click()
        await $('//android.widget.TextView[@content-desc="Auto Complete"]').click();
        await $('//*[@content-desc="1. Screen Top"]').click();
            
        //enter country name in the text field

        const textField = await $('//*[@resource-id="io.appium.android.apis:id/edit"]');
    
        await textField.addValue('Canada');

        //Validate the entered country name
        await expect (textField).toHaveTextContaining('Canada');
            

    });



})