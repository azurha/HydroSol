import type { HttpContext } from '@adonisjs/core/http'

export default class MentionsLegalesController {
  async show({ request, response, view }: HttpContext) {
    const isUnpolyRequest = request.header('X-Up-Target')

    if (isUnpolyRequest) {
      response.header('X-Up-Method', 'GET')
      response.header('Vary', 'X-Up-Target')
      response.header('Content-Type', 'text/html')
      return view.render('components/main/mentions-legales')
    }

    return view.render('pages/mentions-legales')
  }
}
