var time = require("english-time");

module.exports = every;

function every(interval){
  var params;

  params = [
    arguments[ arguments.length - 1 ],
    time(interval)
  ];

  params.push.apply(params, Array.prototype.slice.call( arguments, 1, arguments.length - 1 ));

  return setInterval.apply(this, params);
}
