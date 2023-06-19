import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

import type { App } from 'vue'
import { directives } from 'app/directives'

/**
 * Connects user directives, UI library fonts and auxiliary tools such as router state manager and ui library
 *
 * @param app an application instance created using createApp
 */
export function registerPlugins (app: App) {
    directives.forEach(directive => {
        app.directive(directive.name, directive)
    })

    loadFonts()

    app
        .use(vuetify)
        .use(router)
        .use(pinia)
}
