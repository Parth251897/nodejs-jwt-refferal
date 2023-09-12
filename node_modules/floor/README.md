# floor.js

Floors the given value to the specified number of decimal places.

## Install

```sh
npm install floor
```

## API

### floor(value)

Returns the largest integer less than or equal to `value`.

```js
var floor = require('floor');

floor(.95); // 0
floor(4); // 4
floor(7.004); // 7
```

### floor(value, scale)

Returns the largest integer less than or equal to `value` to `scale` (+/-) number of decimal places.

```js
var floor = require('floor');

floor(55.51, -1); // 55.5
floor(51, 1); // 50
floor(-55.59, -1); // -55.6
floor(-59, 1); // -60

floor(12489.9482, 5); // 0
floor(12489.9482, 4); // 10000
floor(12489.9482, 3); // 12000
floor(12489.9482, 2); // 12400
floor(12489.9482, 1); // 12480
floor(12489.9482, 0); // 12489
floor(12489.9482, -1); // 12489.9
floor(12489.9482, -2); // 12489.94
floor(12489.9482, -3); // 12489.948
floor(12489.9482, -4); // 12489.9482
floor(12489.9482, -5); // 12489.9482
```