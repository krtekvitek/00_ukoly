describe('My Login application', () => {
    it('should login with valid credentials', () => {
        browser.url(`https://the-internet.herokuapp.com/login`);
        browser.pause(5000);
        $('#username').setValue(ahoj);
        browser.pause(5000);
        $('#password').setValue(ahoj);
        $('button[type="submit"]').click(); 
        browser.pause(5000);
        expect($('#flash')).toBeExisting();
        expect($('#flash')).toHaveTextContaining(
            'You logged into a secure area!');
    });
});

