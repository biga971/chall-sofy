/**
 * @param {import("puppeteer").Page} page 
 * 
 * @returns {Promise<>}
 */

import {setTimeout} from "node:timers/promises";
import { citys } from "../data/index.js";

export default function (page) {
    return new Promise(async resolve => {
      
      await page.goto('https://www.gwadair.fr/widget/atmo', { waitUntil: 'domcontentloaded' }) 
      await page.setRequestInterception(true);

      const data = []

      for (let i = 0; i < citys.length; i++) {
        const d = citys[i]
        await page.select('#liste-communes', d.city)

        await setTimeout(1000);

        const resultSelector = '#indice-today'
        const result = await page.waitForSelector(resultSelector)
        const resultText = await page.evaluate(el => el.textContent, result)

        data.push({ city: d.city, index: resultText })
      }
      
      (async () => {
        const rawResponse = await fetch('http://localhost:3333/api/air-qualities', {
          method: 'POST',
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({data: data})
        });
        const content = await rawResponse.json();
      
        console.log(content);
      })();

      resolve()
    })
}
