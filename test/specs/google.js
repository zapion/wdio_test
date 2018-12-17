describe('test google main page', () => {
    it('should see google main page', () => {
        browser.url("https://www.google.com")
        browser.logger.info(browser.getUrl())
    })
})
