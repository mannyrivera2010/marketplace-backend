function NotificationService() {
}

// GET /api/notification
// Get a list of all system-wide Notification entries
function listNotification() {
  return [{}];
}

// GET /api/notification/{pk}
// Find an Notification Entry by ID
function getNotification(id) {
  return { id: id };
}

// POST /api/notification/
// Add an Notification
function postNotification(notificationObject) {
  return { id: id };
}


// PUT /api/notification/{pk}
// Update an Notification Entry by ID
function updateNotification(id) {
  return { id: id };
}


// PATCH /api/notification/{pk}
// Update (Partial) an Notification Entry by ID
function partialUpdateNotification(id) {
  return { id: id };
}


// DELETE /api/notification/{pk}
// Delete an Notification Entry by ID
function deleteUpdateNotification(id) {
  return { id: id };
}


NotificationService.prototype = {
  listNotification: listNotification,
  getNotification: getNotification,
  postNotification: postNotification,
  updateNotification: updateNotification,
  partialUpdateNotification: partialUpdateNotification,
  deleteUpdateNotification: deleteUpdateNotification
};

var notificationService = new NotificationService();

module.exports = notificationService;
