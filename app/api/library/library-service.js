function LibraryService() {
}

// GET /api/library
// Get a list of all system-wide Library entries
function listLibrary() {
  return [{}];
}

// GET /api/library/{pk}
// Find an Library Entry by ID
function getLibrary(id) {
  return { id: id };
}

// POST /api/library/
// Add an Library
function postLibrary(libraryObject) {
  return { id: id };
}


// PUT /api/library/{pk}
// Update an Library Entry by ID
function updateLibrary(id) {
  return { id: id };
}


// PATCH /api/library/{pk}
// Update (Partial) an Library Entry by ID
function partialUpdateLibrary(id) {
  return { id: id };
}


/*
DELETE /api/library/{pk}
Delete an Library Entry by ID
*/
function deleteUpdateLibrary(id) {
  return { id: id };
}


/*
*/
function create_self_user_library_entry(username, listing_id, folder_name, position){

}

function create_batch_library_entries(username, data){

}

function import_bookmarks(current_username, peer_bookmark_notification_id):{

}

LibraryService.prototype = {
  listLibrary: listLibrary,
  getLibrary: getLibrary,
  postLibrary: postLibrary,
  updateLibrary: updateLibrary,
  partialUpdateLibrary: partialUpdateLibrary,
  deleteUpdateLibrary: deleteUpdateLibrary
};

var libraryService = new LibraryService();

module.exports = libraryService;
