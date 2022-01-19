const { Schema, model } = require('mongoose');

const UrlSchema = Schema({
  original_url: {
    type: String,
    required: true
  },
  short_url: {
    type: String,
    required: true
  }
});

module.exports = model("Url", UrlSchema);