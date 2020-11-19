describe('01 - práce s prohlížečem', () => {
    it('otevře prohlížec, maximalizuje, odscroluje k patičce, zadá email, nastaví fullscreen, minimalizuje, maximalizuje', () => {
        // Jdi na adresu https://www.czechitas.cz/cs
        browser.url('https://www.czechitas.cz/cs/');
        browser.pause(3000);
        
        // - maximalizuje okno a pocka 3 sekundy
        browser.maximizeWindow();
        browser.pause(3000);
            
        // - odscroluje dolu na paticku, najde pole pro vlozeni mailu, odesle mail a pocka 3 sekundy
        browser.$('#footer').scrollIntoView();
        browser.$('.newsletter-email').setValue('muj@email.com');
        browser.pause(3000);

        // - nastavi okno do fullscreen a pocka 5 sekund
        browser.fullscreenWindow();
        browser.pause(5000);
        // - minimalizuje okno a pocka 2 sekundy
        browser.minimizeWindow();
        browser.pause(2000);
        // maximalizuje okno, pocka 2 sekundy
        browser.maximizeWindow();
        browser.pause(2000);
    });
});


describe('Cvičení 2 - navigace', () => {
    
        it('Otevři stránku prohlížeče', () => {
            browser.url("https://seznam.cz");
            browser.pause(2000);      
        });
    
        it('Jdi zpět', () => {
            browser.url("https://seznam.cz");
            browser.pause(2000); 
            browser.back();
            browser.pause(2000);     
        });
    
        it('Jdi vpřed', () => {
            browser.url("https://seznam.cz");
            browser.pause(2000); 
            browser.forward();
            browser.pause(2000);     
        });
    
        it('Aktualizuj', () => {
            browser.url("https://seznam.cz");
            browser.pause(2000); 
            browser.refresh();
            browser.pause(2000);     
    });
});


describe('Cvičení 3 - screenshots', () => {
    const utils = require('../../utils')
    let date = new Date().valueOf();
    it('přejde na stánky a udělá screenshot', () => {

        browser.url('https://www.czechitas.cz/cs/');
        browser.pause(3000);
        utils.saveScreenshot(date, 'screen-main-page.png');
        //browser.saveScreenshot(date + 'screen-main-page.png');
            
        // - prejde na stranku portfolia v cs, pocka 5 sekund a ulozi screen obrazovky
        browser.url('https://www.czechitas.cz/cs/portfolio');
        browser.pause(3000);
        browser.saveScreenshot(date + 'screen-portfolio1.png');  

        // prejde na stranku portfolia v en, pocka 5 sekund, ulozi screen obrazovky
        browser.url('https://www.czechitas.cz/en/portfolio')
        browser.pause(3000);
        browser.saveScreenshot(date + 'screen-portfolio2.png');  
    });
});