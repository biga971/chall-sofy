import vine from '@vinejs/vine'

export const AirQualityValidator = vine.compile(
  vine.object({
    data : vine.array(
      vine.object({
        city: vine.string().maxLength(50),
        index: vine.string().maxLength(20),
      })
    )
  })
)

export const CreateAirQualityValidator = vine.compile(
  vine.object({
    city: vine.string().maxLength(50),
    index: vine.string().maxLength(20),
  })
)

export const IndexAirQualityValidator = vine.compile(
  vine.object({
    city: vine.string().maxLength(50),
  })
)