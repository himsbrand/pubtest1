[![Build Status](https://travis-ci.org/himsbrand/pubtest1.svg?branch=master)](https://travis-ci.org/himsbrand/pubtest1)
[![Coverage Status](https://coveralls.io/repos/github/himsbrand/pubtest1/badge.svg?branch=master)](https://coveralls.io/github/himsbrand/pubtest1?branch=master)

# pubtest1
A Node.js module that returns the plural form of any noun
## Installation 
```sh
npm install pubtest1 --save
yarn add pubtest1
bower install pluralize --save
```
## Usage

### Javascript
```javascript
var pluralise = require('pubtest1');
var boys = pluralise.getPlural('Boy');
```
```sh
Output should be 'Boys'
```
### TypeScript
```typescript
import { getPlural } from 'pubtest1';
console.log(getPlural('Goose'))
```
```sh
Output should be 'Geese'
```
### AMD
```javascript
define(function(require,exports,module){
  var pluralise = require('pubtest1');
});
```
## Test 
```sh
npm run test
```
