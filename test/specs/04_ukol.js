const utils = require('../../utils')
describe('04_Secret number', () => {
  

    beforeEach(() => { //muzes zmenit na beforeEach, pokud je potreba
      browser.url('https://automation.cervik.repl.co/inputs.html')       
    })
    
    it('confirmation appears after validating correct secret number', () => {
      // potvrzení se objeví po ověření správného čísla
      let pomocnaHlaska = utils.helpMessage();
      let password = browser.$('#secretPassword').getValue();
      browser.$('#secretNumberInput').setValue(password);
      browser.pause(2000);
      browser.$('#checkSecretNumber').click();
      expect(pomocnaHlaska).toHaveText('Super secret je super správně.');
      console.log(`Zadané správné číslo je ${password}`)
    })
  
    it('error appears after validating wrong secret number', () => {
      // po ověření nesprávného čísla se objeví chyba
      let pomocnaHlaska = utils.helpMessage();
      let wrongNumber = Math.floor(Math.random()*1000000000);
      browser.$('#secretNumberInput').setValue(wrongNumber);
      browser.pause(2000);
      browser.$('#checkSecretNumber').click();
      expect(pomocnaHlaska).toHaveText('Super secret je super špatně.');
      console.log(`Zadané špatné číslo je ${wrongNumber}`);
  
    })
  
    it('error appears after validating empty secret number', () => {
      // po ověření prázdného tajného čísla se objeví chyba
      let pomocnaHlaska = utils.helpMessage();
      browser.$('#secretNumberInput').setValue();
      browser.pause(2000);
      browser.$('#checkSecretNumber').click();
      expect(pomocnaHlaska).toHaveText('Super secret je super špatně.');
      
    })
  })