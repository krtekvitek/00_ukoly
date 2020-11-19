const { saveScreenshot } = require("../../utils");

describe('05_Fox', () => {
    // TEST-CASE
    it('Klik na tlačítko, když se objeví liška', () => {
        let vysledek = $('#somethingForYou')
        browser.url('https://automation.cervik.repl.co/findfox.html');
        const fox = $('button=🦊');
        fox.waitForDisplayed({timeout: 30000});
        fox.click();
        browser.pause(3000);
        browser.saveScreenshot('Liška.png');
        expect(vysledek).not.toHaveText('🐵 🙈 Ne. Takhle ne. 🙉 🙊')
    });

    
});

