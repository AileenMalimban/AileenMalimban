describe('Android Native feature tests', () => {
    it('It Access an activity directly', async () => {
        // Trying to access an activity
        await driver.startActivity("io.appium.android.apis", ".app.AlertDialogSamples");


        //pause
        await driver.pause (3000);


        //assert the screen title
       const dialog = await $('android.widget.TextView')
       await expect (dialog).toHaveText('App/Alert Dialogs');

       // or you can also do this assertion
      //await expect ($('//*[@text="App/Alert Dialogs"]'));


    });
})