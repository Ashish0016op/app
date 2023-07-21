const path=require('path');

exports.get404 = (req, res, next) => {
    res.status(404).send('<p>page not found</p>');
  };