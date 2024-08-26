import { DateTime } from 'luxon'
import { BaseModel, column } from '@adonisjs/lucid/orm'

export default class AirQuality extends BaseModel {
  @column({ isPrimary: true })
  declare id: number

  @column.dateTime({})
  declare date: DateTime

  @column()
  declare city: string

  @column()
  declare index: string

  @column.dateTime({ autoCreate: true })
  declare createdAt: DateTime

  @column.dateTime({ autoCreate: true, autoUpdate: true })
  declare updatedAt: DateTime
}