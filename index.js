const puppeteer = require('puppeteer');
const fs = require('fs');
// var randomize = require('randomatic');
const { devices } = puppeteer;
const iPhoneX = devices["iPhone X"];


(async () => {
  const browser = await puppeteer.launch({
    headless:false,
    args: ['--incognito','--no-default-browser-check','--disable-site-isolation-trials','--no-experiments','--ignore-gpu-blacklist','--ignore-certificate-errors','--ignore-certificate-errors-spki-list','--disable-gpu','--disable-extensions','--disable-default-apps','--enable-features=NetworkService','--disable-setuid-sandbox','--no-sandbox','--disable-webgl','--disable-threaded-animation','--disable-threaded-scrolling','--disable-in-process-stack-traces','--disable-histogram-customizer','--disable-gl-extensions','--disable-composited-antialiasing','--disable-canvas-aa','--disable-3d-apis','--disable-accelerated-2d-canvas','--disable-accelerated-jpeg-decoding','--disable-accelerated-mjpeg-decode','--disable-app-list-dismiss-on-blur','--disable-accelerated-video-decode']
});
  const context = await browser.createIncognitoBrowserContext();  
  const page = await context.newPage();
  const ali2 = `https://generator.email/`;
  await page.emulate(iPhoneX);
  await page.goto(`${ali2}`,{waitUntil : 'networkidle2'});
  await page.click('#copbtn')
//proses copy generator mail selesai
  const mail = await page.$eval('#email_ch_text', element => element.textContent)
    console.log('====================================')
  console.log('Email: '+mail)
    console.log('====================================')
  console.log('Copy email: sukses ')
    console.log('====================================')
 //   fs.writeFileSync('mail.txt', mail);
//proses baru
  const page2 = await context.newPage();
  const twit = `https://www.redbubble.com/signup`;
  await page2.emulate(iPhoneX);
  await page2.goto(`${twit}`,{timeout:100000});
  console.log('Membuka redbubble : Sukses ')
    console.log('====================================')
 // generate random string
    var shopname = Math.random().toString(36).slice(-8);
    var pass = Math.random().toString(36).slice(-8);
 //baru
    await page2.waitForSelector('#ReduxFormRadio1 > div:nth-child(1) > label',{timeout:100000})
    await page2.click('#ReduxFormRadio1 > div:nth-child(1) > label')
 //paste email  
    const input1= await page2.$('#ReduxFormInput1')
    await input1.focus()
    await page2.keyboard.down('ControlLeft');
    await page2.keyboard.press('KeyV');
    await page2.keyboard.up('ControlLeft'); 
    console.log('Paste mail ke form : sukses')
    console.log('====================================')
    console.log('Mengisi shopname : sukses')
 //mengisi shopname   
    await page2.waitForSelector('#ReduxFormInput2')
    await page2.type('#ReduxFormInput2',shopname,{delay:100})
    console.log('Shopname :',shopname)
  
    console.log('====================================')
 //mengisi password  
    console.log('Mengisi password : sukses') 
    await page2.type('#ReduxFormInput3',pass,{delay:100})
    console.log('Pass :',pass)

 //submit
 fs.appendFileSync("userpass.txt", `${mail}\n${shopname}\n${pass}\n`);
    console.log('====================================')
    console.log('Proses submit ..')
    await page2.click('#RB_React_Component_SignupFormContainer_0 > div > form > span > button')
    console.log('Verifikasi captcha')
    await page2.waitForSelector('#app > div > div.ds-theme-find-your-thing.shared-App__dsWrapper--RyVET > div:nth-child(2) > div > div > div > div > section > div.node_modules--redbubble-design-system-react-Box-styles__box--206r9.shared-components-NewArtistDashboard-NewArtistDashboard__NewArtistDashboard--1tlq8 > div.node_modules--redbubble-design-system-react-Box-styles__box--206r9.shared-components-NewArtistDashboard-NewArtistDashboard__steps--1H-r0 > div.node_modules--redbubble-design-system-react-Card-styles__card--3Xq2P.shared-components-NewArtistDashboard-AccountSettings-AccountSettings__card--IGLgl.node_modules--redbubble-design-system-react-Card-styles__overflowHidden--2ppNF.node_modules--redbubble-design-system-react-Card-styles__rounded--x4wZQ.node_modules--redbubble-design-system-react-Card-styles__elevationMedium--3NRmN > div.node_modules--redbubble-design-system-react-Box-styles__box--206r9.node_modules--redbubble-design-system-react-Box-styles__paddingBottom-2--3bbcw.node_modules--redbubble-design-system-react-Box-styles__paddingLeft-1--1V58W.node_modules--redbubble-design-system-react-Box-styles__paddingRight-1--1g1Gg > ul > li:nth-child(1) > h6 > a > span > span', {timeout:1000000})
    await page2.click('#app > div > div.ds-theme-find-your-thing.shared-App__dsWrapper--RyVET > div:nth-child(2) > div > div > div > div > section > div.node_modules--redbubble-design-system-react-Box-styles__box--206r9.shared-components-NewArtistDashboard-NewArtistDashboard__NewArtistDashboard--1tlq8 > div.node_modules--redbubble-design-system-react-Box-styles__box--206r9.shared-components-NewArtistDashboard-NewArtistDashboard__steps--1H-r0 > div.node_modules--redbubble-design-system-react-Card-styles__card--3Xq2P.shared-components-NewArtistDashboard-AccountSettings-AccountSettings__card--IGLgl.node_modules--redbubble-design-system-react-Card-styles__overflowHidden--2ppNF.node_modules--redbubble-design-system-react-Card-styles__rounded--x4wZQ.node_modules--redbubble-design-system-react-Card-styles__elevationMedium--3NRmN > div.node_modules--redbubble-design-system-react-Box-styles__box--206r9.node_modules--redbubble-design-system-react-Box-styles__paddingBottom-2--3bbcw.node_modules--redbubble-design-system-react-Box-styles__paddingLeft-1--1V58W.node_modules--redbubble-design-system-react-Box-styles__paddingRight-1--1g1Gg > ul > li:nth-child(1) > h6 > a > span > span')
    await page2.waitForSelector('#send-email-button')
    await page2.click('#send-email-button')
//get otp
    await page.goto(`${ali2}`,{waitUntil : 'networkidle2'});
    await page.waitForSelector('#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > p:nth-child(3)',{timeout:200000})
    const otp = await page.evaluate(() =>
    document.querySelector("#email-table > div.e7m.row.list-group-item > div.e7m.col-md-12.ma1 > div.e7m.mess_bodiyy > p:nth-child(3)").textContent.trim()
   );
   console.log('OTP: '+otp)
   const page3 = await context.newPage();
   const verif = `${otp}`;
   await page3.emulate(iPhoneX);
   await page3.goto(`${verif}`,{timeout:100000});
   console.log('====================================')
   console.log('Akun selesai di verifikasi: ',`\n${mail}\n${shopname}\n${pass}\n`)
await browser.close()
  })();
