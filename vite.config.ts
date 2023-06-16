import vue from '@vitejs/plugin-vue'
import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'
import tsconfigPaths from 'vite-tsconfig-paths'

import { defineConfig } from 'vite'

export default defineConfig({
    plugins: [
        vue({
            template: { transformAssetUrls }
        }),
        vuetify({
            autoImport: true,
            styles: {
                configFile: 'src/app/styles/settings.scss',
            },
        }),
        tsconfigPaths(),
    ],
    define: { 'process.env': {} },
    resolve: {
        extensions: [
            '.json',
            '.ts',
            '.vue',
        ],
    },
    server: {
        port: 3000,
    }
})
