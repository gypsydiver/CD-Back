module.exports = {
  _config: {
    actions: false,
    shortcuts: false,
    rest: false
  },

  login: function(req, res) {
    return res.ok({ code: 200 }, 'User');
  }
};
