const Joi = require('joi');

// const schema = Joi.object().keys({
//     username: Joi.string().alphanum().min(3).max(30).required(),
//     password: Joi.string().regex(/^[a-zA-Z0-9]{3,30}$/),
//     access_token: [Joi.string(), Joi.number()],
//     birthyear: Joi.number().integer().min(1900).max(2013),
//     email: Joi.string().email()
// }).with('username', 'birthyear').without('password', 'access_token');
//
// data = { username: 'a!bca', birthyear: 18994, password:'!!!' }
// // Return result.
// const result = Joi.validate(data, schema);
// // result.error === null -> valid
//
// // You can also pass a callback which will be called synchronously with the validation result.
// Joi.validate(data, schema, {abortEarly: false}, function (err, value) {
//      console.log(err.message);
//
//       //console.log(value);
//  });  // err === null -> valid
//
//

 const schemaListing = Joi.object().keys({
     id: Joi.number().integer(),
     title: Joi.string().min(3).max(30).required()
 })

 listing = {
     "id": 1,
     "is_bookmarked": true,
     "screenshots": [
         {
             "small_image": {
                 "url": "http://127.0.0.1:8000/api/image/10/",
                 "id": 10,
                 "security_marking": "UNCLASSIFIED"
             },
             "large_image": {
                 "url": "http://127.0.0.1:8000/api/image/11/",
                 "id": 11,
                 "security_marking": "UNCLASSIFIED"
             },
             "description": null
         }
     ],
     "doc_urls": [
         {
             "name": "wiki",
             "url": "http://www.google.com/wiki"
         },
         {
             "name": "guide",
             "url": "http://www.google.com/guide"
         }
     ],
     "owners": [
         {
             "id": 4,
             "user": {
                 "username": "wsmith"
             },
             "display_name": "Winston Smith"
         }
     ],
     "categories": [
         {
             "title": "Communication",
             "description": "Moving info between people and things"
         },
         {
             "title": "Productivity",
             "description": "Do more in less time"
         }
     ],
     "tags": [
         {
             "name": "demo"
         },
         {
             "name": "example"
         },
         {
             "name": "tag_0"
         }
     ],
     "contacts": [
         {
             "id": 1,
             "contact_type": {
                 "name": "Civilian"
             },
             "secure_phone": null,
             "unsecure_phone": "321-123-7894",
             "email": "osha@stark.com",
             "name": "Osha",
             "organization": "House Stark"
         },
         {
             "id": 3,
             "contact_type": {
                 "name": "Military"
             },
             "secure_phone": null,
             "unsecure_phone": "222-324-3846",
             "email": "brienne@stark.com",
             "name": "Brienne Tarth",
             "organization": "House Stark"
         }
     ],
     "intents": [],
     "small_icon": {
         "url": "http://127.0.0.1:8000/api/image/6/",
         "id": 6,
         "security_marking": "UNCLASSIFIED"
     },
     "large_icon": {
         "url": "http://127.0.0.1:8000/api/image/7/",
         "id": 7,
         "security_marking": "UNCLASSIFIED"
     },
     "banner_icon": {
         "url": "http://127.0.0.1:8000/api/image/8/",
         "id": 8,
         "security_marking": "UNCLASSIFIED"
     },
     "large_banner_icon": {
         "url": "http://127.0.0.1:8000/api/image/9/",
         "id": 9,
         "security_marking": "UNCLASSIFIED"
     },
     "agency": {
         "title": "Ministry of Truth",
         "short_name": "Minitrue"
     },
     "last_activity": {
         "action": "APPROVED",
         "activity_date": "2017-09-15T02:59:54.525442Z",
         "description": null,
         "author": {
             "id": 4,
             "user": {
                 "username": "wsmith",
                 "email": "wsmith@oceania.gov"
             },
             "display_name": "Winston Smith",
             "dn": "Winston Smith wsmith"
         },
         "listing": {
             "unique_name": "ozp.test.air_mail",
             "title": "Air Mail",
             "id": 1,
             "agency": {
                 "title": "Ministry of Truth",
                 "short_name": "Minitrue"
             },
             "small_icon": "http://127.0.0.1:8000/api/image/6/",
             "is_deleted": false
         },
         "change_details": []
     },
     "current_rejection": null,
     "listing_type": {
         "title": "Web Application"
     },
     "title": "Air Mail",
     "approved_date": "2017-09-15T02:59:54.526479Z",
     "edited_date": "2017-09-15T02:59:54.544492Z",
     "description": "Sends mail via air",
     "launch_url": "https://localhost:8443/demo_apps/centerSampleListings/airMail/index.html",
     "version_name": "1.0.0",
     "unique_name": "ozp.test.air_mail",
     "what_is_new": "Nothing really new here",
     "description_short": "Sends airmail",
     "requirements": "None",
     "approval_status": "APPROVED",
     "is_enabled": true,
     "is_featured": true,
     "is_deleted": false,
     "avg_rate": 3.0,
     "total_votes": 3,
     "total_rate5": 1,
     "total_rate4": 0,
     "total_rate3": 1,
     "total_rate2": 0,
     "total_rate1": 1,
     "total_reviews": 3,
     "iframe_compatible": false,
     "security_marking": "UNCLASSIFIED",
     "is_private": false,
     "required_listings": null,
     "cert_issues": []
 }

 // You can also pass a callback which will be called synchronously with the validation result.
 Joi.validate(listing, schemaListing, {abortEarly: false}, function (err, value) {
      console.log(err.message);

       //console.log(value);
  });  // err === null -> valid
