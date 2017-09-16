function NotSupportedError(message) {
    this.name = 'NotSupportedError';
    this.message = message || 'Method Not Supported';
    this.statusCode = 404;
}

NotSupportedError.prototype = Object.create(Error.prototype);

NotSupportedError.prototype.constructor = NotSupportedError;

module.exports = NotSupportedError;
