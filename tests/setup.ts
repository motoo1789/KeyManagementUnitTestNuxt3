import { config } from '@vue/test-utils'
import { createVuetify } from 'vuetify'


const vuetify = createVuetify()

config.global.plugins = [vuetify]
// configNuxt.global.plugins = [vuetify]