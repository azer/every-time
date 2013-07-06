var every = require("./");

it('sets a setInterval with given english time', function(done){

  var ctr = 0, id;

  id = every('500ms', function(){
    expect(ctr++).to.be.below(3);

    if ( ctr >= 3 ) {
      clearInterval(id);
      done();
    }
  });

});

it('takes parameters optionally', function(done){

  var ctr = 0, id;

  id = every('200ms', 3, 14, 156, function(a, b, c){
    expect(ctr++).to.be.below(5);
    expect(a).to.equal(3);
    expect(b).to.equal(14);
    expect(c).to.equal(156);


    if ( ctr >= 5 ) {
      clearInterval(id);
      done();
    }

  });

});
