module.exports = function notFound (data, options) {
  var req = this.req;
  var res = this.res;
  var sails = req._sails;
  data = data || 'route';

  res.status(200);

  var format = [{ field: data, msg: 'Not found' }];

  // Log error to console
  if (data !== undefined) {
    sails.log.verbose('Sending 404 ("Not Found") response: \n',data);
  }
  else sails.log.verbose('Sending 404 ("Not Found") response');

  return res.jsonx({ err: format, success: null });
};
