/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import FileUploadsController from '#controllers/file_uploads_controller'
import AirQualitiesController from '#controllers/air_qualities_controller'

import router from '@adonisjs/core/services/router'

router.group(() => {
  router.post('/upload-csv', [FileUploadsController, 'store'])
  router.post('/air-qualities', [AirQualitiesController, 'storeMany'])
  router.get('/air-qualities', [AirQualitiesController, 'show'])
  router.post('/air-qualities/index', [AirQualitiesController, 'index'])
  router.put('/air-qualities/:id', [AirQualitiesController, 'update'])
})
.prefix('/api')