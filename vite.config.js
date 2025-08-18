import {fileURLToPath, URL} from 'node:url'

import {defineConfig} from 'vite'
import vue from '@vitejs/plugin-vue'
import vueDevTools from 'vite-plugin-vue-devtools'
import ui from '@nuxt/ui/vite'


// https://vite.dev/config/
export default defineConfig({
    plugins: [
        vue(),
        vueDevTools(),
        ui({
            colors: {
                primary: 'primary',   // #3f7498
                secondary: 'secondary', // #408c8f
                tertiary: 'tertiary',   // #7d508d
                accent: 'beam',     // #ff6fec (optional)
                neutral: 'slate',   // use Tailwind’s slate for grays
                info: 'sky',
                success: 'emerald',
                warning: 'amber',
                error: 'rose'
            },
            theme: {
                colors: ['primary', 'secondary', 'tertiary', 'accent', 'neutral', 'info', 'success', 'warning', 'error']
            },
            icons: {
                arrowLeft: 'i-lucide-arrow-left',
                arrowRight: 'i-lucide-arrow-right',
                check: 'i-lucide-check',
                chevronDoubleLeft: 'i-lucide-chevrons-left',
                chevronDoubleRight: 'i-lucide-chevrons-right',
                chevronDown: 'i-lucide-chevron-down',
                chevronLeft: 'i-lucide-chevron-left',
                chevronRight: 'i-lucide-chevron-right',
                chevronUp: 'i-lucide-chevron-up',
                close: 'i-lucide-x',
                ellipsis: 'i-lucide-ellipsis',
                external: 'i-lucide-arrow-up-right',
                file: 'i-lucide-file',
                folder: 'i-lucide-folder',
                folderOpen: 'i-lucide-folder-open',
                loading: 'i-lucide-loader-circle',
                minus: 'i-lucide-minus',
                plus: 'i-lucide-plus',
                search: 'i-lucide-search',
                upload: 'i-lucide-upload'
            },
        })
    ],
    resolve: {
        alias: {'@': fileURLToPath(new URL('./src', import.meta.url))}
    },
})
