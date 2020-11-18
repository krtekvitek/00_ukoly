let utils = require('../../utils')

describe('02_selenium github', () => {
    it('opens page and save screenshot with correct date', () => {
        // otevri stranku https://github.com/czechitas-da2020/01_automation
        browser.url('https://github.com/czechitas-da2020/01_automation')
        
        // vyfot screenshot a pojmenuje se dateFormat + 'screenshot-github.png'
        let dateFormat = utils.getCorrectFormat()
        let fileName = dateFormat + '_screenshot-github.png'
        browser.saveScreenshot(fileName)
        console.log('Vytvoril jsem soubor s nazvem ' + fileName )
        //Vyzkousej si, jestli vse funguje, jak ma
    });
});