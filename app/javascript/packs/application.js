// This file is automatically compiled by Webpack, along with any other files
// present in this directory. You're encouraged to place your actual application logic in
// a relevant structure within app/javascript and only use these pack files to reference
// that code so it'll be compiled.

import 'src/application.scss'

require.context('../images', true)

require('@rails/ujs').start()
require('turbolinks').start()

require('src/javascripts/initialize-on-event')

require('src/bootstrap')
require('src/fontawesome')

require('src/javascripts/handlebars-helpers')
require('src/javascripts/conversations')
require('src/javascripts/forms')
require('src/javascripts/maps')
require('src/javascripts/maps-new')
require('src/javascripts/maps-search')
require('src/javascripts/navbar')
require('src/javascripts/pages')

window.$ = $
