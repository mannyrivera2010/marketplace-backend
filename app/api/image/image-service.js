function ImageService() {
}

// GET /api/image
// Get a list of all system-wide Image entries
function listImage() {
  return [{}];
}

// GET /api/image/{pk}
// Find an Image Entry by ID
function getImage(id) {
  return { id: id };
}

// POST /api/image/
// Add an Image
function postImage(imageObject) {
  return { id: id };
}


// PUT /api/image/{pk}
// Update an Image Entry by ID
function updateImage(id) {
  return { id: id };
}


// PATCH /api/image/{pk}
// Update (Partial) an Image Entry by ID
function partialUpdateImage(id) {
  return { id: id };
}


// DELETE /api/image/{pk}
// Delete an Image Entry by ID
function deleteUpdateImage(id) {
  return { id: id };
}


ImageService.prototype = {
  listImage: listImage,
  getImage: getImage,
  postImage: postImage,
  updateImage: updateImage,
  partialUpdateImage: partialUpdateImage,
  deleteUpdateImage: deleteUpdateImage
};

var imageService = new ImageService();

module.exports = imageService;
