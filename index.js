const request = require('request');
let base = void(0);

exports.load = function(obj){
  base = obj.path;
}

exports.get = function(path){
  return new Promise((resolve, reject) => {
    request.get(path, function(err, resp, body){
      if (err) reject(err);
      resolve(resp);
    });
  });
};