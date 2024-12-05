import type { HttpContext } from '@adonisjs/core/http'

export default class MentionsLegalesController {
  async show({ view }: HttpContext) {
    return view.render('pages/mentions-legales')
  }
}
