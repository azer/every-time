## every-time

Declarative setInterval. See also: [after-time](http://github.com/azer/after-time)

```js
every = require('every-time')

every('5 mins, 5 seconds', function(){
  console.log('hello')
})
```

Full Language Reference: [english-time](http://github.com/azer/english-time)

## Install

```bash
$ npm install every-time
```

## Usage

```js
every = require('every-time')

every('1s 250ms', function(){
  // do something
})
```

Passing parameters:

```js
every('5 secs', 'foo', 'bar', function(foo, bar) {

  foo
  // => 'foo'

  bar
  // => 'bar'

})
```

![](https://dl.dropboxusercontent.com/s/gpaksa921cwg3i6/npmel_32.jpg)
