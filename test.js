var models = require('./models')


//models.ozpcenter_category.findAll().then(result => { console.log(JSON.stringify(result))});


const express = require('express')
const app = express()

app.get('/api/listing', function (req, res) {

  include_1 = [
    {model:models.ozpcenter_agency, as:'agency'},
    {model:models.ozpcenter_image, as:'small_icon'},
    {model:models.ozpcenter_image, as:'large_icon'},
    {model:models.ozpcenter_image, as:'banner_icon'},
    {model:models.ozpcenter_image, as:'large_banner_icon'},
    {model:models.ozpcenter_category, as:'categories'},
    {model:models.ozpcenter_contact, as:'contacts'},
    {model:models.ozpcenter_profile, as:'owners', attributes: ['display_name']},
    {model:models.ozpcenter_tag, as:'tags'},
    {model:models.ozpcenter_intent, as:'intents'},
    {model:models.ozpcenter_screenshot, as:'screenshots',
          include: [{model:models.ozpcenter_image, as:'screenshot_small_image'},
                    {model:models.ozpcenter_image, as:'screenshot_large_image'}]},
  ]
  console.log(models.ozpcenter_listing.associations)

  models.ozpcenter_listing
        .findAll({include:include_1})
        .then(result => {res.json(result)});
})

app.listen(3000, function () {
  console.log('Example app listening on port 3000!')
})
