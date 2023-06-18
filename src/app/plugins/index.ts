import { loadFonts } from './webfontloader'
import vuetify from './vuetify'
import pinia from '../store'
import router from '../router'

import type { App } from 'vue'
import { directives } from 'app/directives'

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
