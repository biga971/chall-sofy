
import scheduler from 'adonisjs-scheduler/services/main'
import AirQuality from "#models/air_quality"
import Client from '#models/client';

//scheduler.command("inspire").everyFiveSeconds();


scheduler.call(async() => {

    const data = await AirQuality.query().orderBy('date', 'desc').limit(32)

    const filter = data.filter((d) => d.index === 'Très Mauvais' || d.index === 'Extrêmement Mauvais' )

    filter.map( async data => {
        const clients = await Client.findManyBy({ city: data.city })

        clients.map(async client => {
            console.log("Bonjour " + client.number + ", aujourd'hui à " + data.city + ", la qualité de l'air est: " + data.index + ". Veuillez prendre les précautions nécessaires. Suivez l'évolution sur http://localhost:3000/description?city=+" + data.city + ".")
        })
        
    })
}).daily();