describe('Navigation Menu', () => {
    it('Get the text of all menu items and assert them', async() => {
        await browser.url('/');

        const expectedLinks = ["Home","About","Shop","Blog","Contact","My account"];
        const actualLinks =[];

        //const navLInks = await $('#primary-menu').$$('li[id*=menu');
        const navLInks = await $$('#primary-menu li[id*=menu');
        for(const link of navLInks){
            actualLinks.push(await link.getText());

        }
        await expect(expectedLinks).toEqual(actualLinks);
    });
});