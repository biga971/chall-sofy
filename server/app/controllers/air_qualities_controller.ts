import type { HttpContext } from '@adonisjs/core/http'
import AirQuality from '#models/air_quality'
import { AirQualityValidator, CreateAirQualityValidator, IndexAirQualityValidator } from '#validators/air_quality'
import { DateTime } from 'luxon'
import { AirQualityRequest } from './interfaces/air_qualities_interface.js'

export default class AirQualitiesController {

  public async storeMany({ request, response }: HttpContext) {
    const customDate = new Date()
    const date: DateTime<boolean> = DateTime.fromJSDate(customDate)
    const customData:  AirQualityRequest[] = []

    const { data } = await request.validateUsing(AirQualityValidator)
    data.map( d => {
      const data = {
        date: date,
        city: d.city,
        index: d.index
      }
      customData.push(data)
    })
    
    await AirQuality.createMany(customData)
    
    return response.status(201).json({ message: 'Air quality data inserted successfully' })
  
  }

  
  public async show({ response }: HttpContext) {
    const airQualities = await AirQuality.query().orderBy('date', 'desc').limit(33)
    return response.status(200).json(airQualities)
  }

  public async index({ request, response }: HttpContext) {
    const { city } = await request.validateUsing(IndexAirQualityValidator)

    const airQuality = await AirQuality.query().where('city', city).orderBy('date', 'desc').first()
  
    if (!airQuality) {
      return response.status(404).json({ message: 'Air quality data not found' })
    }

    return response.status(200).json(airQuality)
  }

  
  public async update({ request, response }: HttpContext) {
    const { id } = request.params()

    const airQuality = await AirQuality.find(id)

    if (!airQuality) {
      return response.status(404).json({ message: 'Air quality data not found' })
    }

    const { city, index } = await request.validateUsing(CreateAirQualityValidator)

    airQuality.city = city
    airQuality.index = index

    await airQuality.save()

    return response.status(200).json(airQuality)
  }
}