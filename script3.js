const puppeteer = require('puppeteer');

(async () => {
  let success = false; // Variable para indicar si la ejecución fue exitosa
  const browser = await puppeteer.launch({ args: ['--no-sandbox'] });
  //const browser = await puppeteer.launch();
  const page = await browser.newPage();
  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://betplay.com.co/');
    await page.waitForSelector('input[type="text"][id="userName"]', { visible: true });
    await page.type('input[type="password"][id="password"]', 'Qwert1619');
    await page.type('input[type="text"][id="userName"]', '1003231130');
    await page.click('#btnLoginPrimary');
    await page.waitForNavigation();
    await page.goto('https://betplay.com.co/slots/launchGame?gameCode=SPB_aviator&flashClient=true&additionalParam=&integrationChannelCode=PARIPLAY');
    await new Promise(resolve => setTimeout(resolve, 25000)); // Espera 5000 milisegundos (5 segundos)
    await page.waitForSelector('#gameFrame');
    const iframePadre = await page.$('#gameFrame');
    const framePadre = await iframePadre.contentFrame();
    await framePadre.waitForSelector('#spribe-game');
    const iframeInterno = await framePadre.$('#spribe-game');
    const frameInterno = await iframeInterno.contentFrame();
    await frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > app-navigation-switcher > div > button:nth-child(3)');
    await frameInterno.click('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > app-navigation-switcher > div > button:nth-child(3)');
    await new Promise(resolve => setTimeout(resolve, 2000)); // Espera 5000 milisegundos (5 segundos)
    await  frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.second-row > div.cashout-block > div.cash-out-switcher > app-ui-switcher > div');
    await  frameInterno.click('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.second-row > div.cashout-block > div.cash-out-switcher > app-ui-switcher > div');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 5000 milisegundos (5 segundos)
    await frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.main-header > app-header > div > div.second-block.d-flex > div.d-flex.h-100 > div.balance.px-2.d-flex.justify-content-end.align-items-center > div > span.amount.font-weight-bold');
    const elemento = await frameInterno.$('body > app-root > app-game > div > div.main-container > div.main-header > app-header > div > div.second-block.d-flex > div.d-flex.h-100 > div.balance.px-2.d-flex.justify-content-end.align-items-center > div > span.amount.font-weight-bold');
    const texto = await elemento.evaluate(el => el.textContent);
    console.log(texto); // Mostrar el texto en la consola
    await frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.first-row.auto-game-feature > div.bet-block > app-spinner > div > div.input > input');
    const ElementInversion = await frameInterno.$('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.first-row.auto-game-feature > div.bet-block > app-spinner > div > div.input > input');
    await ElementInversion.click({ clickCount: 3 }); // Seleccionar todo el texto y borrar
    await ElementInversion.press('Backspace'); // Oprimir la tecla "Backspace" para borrar
    await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 5000 milisegundos (5 segundos)
    await ElementInversion.type('3000');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 5000 milisegundos (5 segundos)
    await frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.second-row > div.cashout-block > div.cashout-spinner-wrapper > div > app-spinner > div > div.input.full-width > input');
    const inputElement = await frameInterno.$('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.second-row > div.cashout-block > div.cashout-spinner-wrapper > div > app-spinner > div > div.input.full-width > input');
    await inputElement.click({ clickCount: 3 }); // Seleccionar todo el texto y borrar
    await inputElement.press('Backspace'); // Oprimir la tecla "Backspace" para borrar
    await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 5000 milisegundos (5 segundos)
    await inputElement.type('1.05');
    await new Promise(resolve => setTimeout(resolve, 1000)); // Espera 5000 milisegundos (5 segundos)

    // Verifica que el elemento haya sido encontrado
if (inputElement) {
  // Obtiene el valor del elemento
  const valorElemento = await inputElement.getProperty('value');
  const valorIngresado = await valorElemento.jsonValue();
  
  // Verifica que el valor sea "1.05"
  if (valorIngresado.trim() === '1.05') {
      console.log('El valor ingresado es 1.05.');
      await  frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.first-row.auto-game-feature > div.buttons-block > button');
      await  frameInterno.click('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.first-row.auto-game-feature > div.buttons-block > button');
      await new Promise(resolve => setTimeout(resolve, 60000)); // Espera 1000 milisegundos (5 segundos)   
  } else {
      console.log('El valor ingresado no es 1.05.');
  }
} else {
  console.log('No se encontró el elemento.');
}
    //capturar el vlaor 
      // Espera a que la página cargue completamente
    await frameInterno.waitForSelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.result-history.disabled-on-game-focused.my-2');
        // Obtiene el primer valor dentro de la clase "bubble-multiplier"
     const primerValor = await frameInterno.evaluate(() => {
    const div = document.querySelector('body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.result-history.disabled-on-game-focused.my-2');
    console.log(div.textContent.trim());
    const valoresLimpios = div.textContent.trim().split("\n").map(valor => valor.replace("x", "")).slice(0, 20);
    //.map(valor => parseFloat(valor.split(" ")[0]));
    return valoresLimpios;
      });
     // Llama a la función y guarda los valores limpios en un array
    ///////
   
    
   // await page.screenshot({ path: 'Apuesta.png' });
    success = true;


  } catch (error) {
    console.error('Ocurrió un error durante el proceso:', error);
  } finally {
    // Cerrar el navegador al finalizar
    await browser.close();
  }
})();
