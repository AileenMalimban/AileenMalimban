describe('Blog', () => {
     it('Get list of recent posts, assert text length > 10 and assert total rows = 4', async () => {
            await browser.url('/blog');

    // Get the recent post lists elements
    const recentPostsList = await $$('#recent-posts-3 ul li');

    //Loop through teh l ist and assert the text lenght is greater than 10
    for(const item of recentPostsList) {
        const text = await item.getText();
        await expect(text.length).toBeGreaterThan(10);
    }

    //Assert the total length of the list is 4
    await expect(recentPostsList).toHaveLength(5);
            
    });
 });