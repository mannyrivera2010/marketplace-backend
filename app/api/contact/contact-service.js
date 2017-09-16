function ContactService() {
}

// GET /api/contact
// Get a list of all system-wide Contact entries
function listContact() {
  return [{}];
}

// GET /api/contact/{pk}
// Find an Contact Entry by ID
function getContact(id) {
  return { id: id };
}

// POST /api/contact/
// Add an Contact
function postContact(contactObject) {
  return { id: id };
}


// PUT /api/contact/{pk}
// Update an Contact Entry by ID
function updateContact(id) {
  return { id: id };
}


// PATCH /api/contact/{pk}
// Update (Partial) an Contact Entry by ID
function partialUpdateContact(id) {
  return { id: id };
}


// DELETE /api/contact/{pk}
// Delete an Contact Entry by ID
function deleteUpdateContact(id) {
  return { id: id };
}

ContactService.prototype = {
  listContact: listContact,
  getContact: getContact,
  postContact: postContact,
  updateContact: updateContact,
  partialUpdateContact: partialUpdateContact,
  deleteUpdateContact: deleteUpdateContact
};

var contactService = new ContactService();

module.exports = contactService;
