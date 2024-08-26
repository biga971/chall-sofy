import vine from '@vinejs/vine'

export const uploadCsvValidator = vine.compile(
  vine.object({
    csv: vine.file({
      size: '2mb',
      extnames: ['csv']
    })
  })
)