import { DateTime } from 'luxon'
export interface AirQualityRequest {
    date: DateTime
    city: string
    index: string
}

export interface AirQualityIndexRequest {
    city: string
}