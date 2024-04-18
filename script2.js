const puppeteer = require('puppeteer');

const selectors = {
  userNameInput: 'input[type="text"][id="userName"]',
  passwordInput: 'input[type="password"][id="password"]',
  loginButton: '#btnLoginPrimary',
  gameFrame: '#gameFrame',
  spribeGame: '#spribe-game',
  cashoutSwitcher: 'body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.second-row > div.cashout-block > div.cash-out-switcher > app-ui-switcher > div',
  amountElement: 'body > app-root > app-game > div > div.main-container > div.main-header > app-header > div > div.second-block.d-flex > div.d-flex.h-100 > div.balance.px-2.d-flex.justify-content-end.align-items-center > div > span.amount.font-weight-bold',
  betInputElement: 'body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.first-row.auto-game-feature > div.bet-block > app-spinner > div > div.input > input',
  cashoutInputElement: 'body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.second-row > div.cashout-block > div.cashout-spinner-wrapper > div > app-spinner > div > div.input.full-width > input',
  startGameButton: 'body > app-root > app-game > div > div.main-container > div.w-100.h-100 > div > div.game-play > div.bet-controls > app-bet-controls > div > app-bet-control:nth-child(1) > div > div.first-row.auto-game-feature > div.buttons-block > button'
};

(async () => {
  let success = false; // Variable para indicar si la ejecución fue exitosa
  const browser = await puppeteer.launch();
  const page = await browser.newPage();

  try {
    await page.setViewport({ width: 1280, height: 800 });
    await page.goto('https://betplay.com.co/');
    await page.waitForSelector(selectors.userNameInput, { visible: true });
    await page.type(selectors.passwordInput, 'Qwert1619');
    await page.type(selectors.userNameInput, '1065623370');
    await page.click(selectors.loginButton);
    await page.waitForNavigation();

    await page.goto('https://betplay.com.co/slots/launchGame?gameCode=SPB_aviator&flashClient=true&additionalParam=&integrationChannelCode=PARIPLAY');
    await page.waitForSelector(selectors.gameFrame);
    const iframePadre = await page.$(selectors.gameFrame);
    const framePadre = await iframePadre.contentFrame();
    await framePadre.waitForSelector(selectors.spribeGame);
    const iframeInterno = await framePadre.$(selectors.spribeGame);
    const frameInterno = await iframeInterno.contentFrame();

    await frameInterno.waitForSelector(selectors.cashoutSwitcher);
    await frameInterno.click(selectors.cashoutSwitcher);

    await frameInterno.waitForSelector(selectors.amountElement);
    const elemento = await frameInterno.$(selectors.amountElement);
    const texto = await elemento.evaluate(el => el.textContent);
    console.log(texto);

    await frameInterno.waitForSelector(selectors.betInputElement);
    const ElementInversion = await frameInterno.$(selectors.betInputElement);
    await ElementInversion.click({ clickCount: 3 });
    await ElementInversion.press('Backspace');
    await ElementInversion.type('1200');

    await frameInterno.waitForSelector(selectors.cashoutInputElement);
    const inputElement = await frameInterno.$(selectors.cashoutInputElement);
    await inputElement.click({ clickCount: 3 });
    await inputElement.press('Backspace');
    await inputElement.type('1.05');

    await frameInterno.waitForSelector(selectors.startGameButton);
    await frameInterno.click(selectors.startGameButton);

    await page.screenshot({ path: 'aviator2.png' });
    console.log('Captura de pantalla realizada correctamente.');
  } catch (error) {
    console.error('Ocurrió un error durante el proceso:', error);
  } finally {
    await browser.close();
  }
})();
