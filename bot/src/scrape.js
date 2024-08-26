import puppeteer from 'puppeteer'
import Guadeloupe from './Guadeloupe/index.js'

/**
 * @param {boolean} show 
 */
export default async function (show) {
    // Pour les test en local
    const browser = await puppeteer.launch({headless: ! show})

    // Pour docker
   /*  const browser = await puppeteer.launch({
        executablePath: '/usr/bin/google-chrome',
        args: [
            '--disable-gpu',
            '--disable-dev-shm-usage',
            '--disable-setuid-sandbox',
            '--no-sandbox'
        ]
        
      }); */
    const page = await browser.newPage()
    await Guadeloupe(page)
    await browser.close();


    
}
