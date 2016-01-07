module.exports = function sendOK (data, type, options) {
  var req = this.req;
  var res = this.res;
  var sails = req._sails;
  options = options || {};

  sails.log.silly('res.ok() :: Sending 200 ("OK") response');

  res.status(200);

  return res.jsonx({ err: null, success: { type: type, data: data } });
};
