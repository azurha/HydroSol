/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

const MentionsLegalesController = () => import('#controllers/mentions_legales_controller')
import router from '@adonisjs/core/services/router'

router.on('/').render('pages/home').as('home')
router.get('/mentions-legales', [MentionsLegalesController, 'show']).as('mentions-legales')
