# gulp-axml-base64image


[![Build Status](https://travis-ci.org/cntanglijun/gulp-imgToBase64.svg?branch=master)](https://travis-ci.org/cntanglijun/gulp-imgToBase64)

Convert and replace image-files within your axml to base64-encoded data.

## Example

##### gulpfile.js

```js
var gulp = require('gulp');
var base64image = require('gulp-axml-base64image');

gulp.task('default', function () {
	gulp.src('index.axml')
		.pipe(base64image())
		.pipe(gulp.dest('path'));
});
```


##### index.axml // Before...

```js
<html>
	<head>
	</head>
	<body>
		<img src="sample.png" />
...
```


##### path/index.html // ...After:

```html
<html>
	<head>
	</head>
	<body>
		<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQAAAAEACAYAAABccqhmAACksUlEQVR42ux9B5glV3F195ud2dkkaSXxE22SDTYigwwWSUQHsAgCEyTAgBAgE0wGA79JwiKDAIlkhEPPJciawUFHLGF/Mko51PVU5iY02AA34XosMiEFoAn5qVkANGNwal6+Zdv3779C9PT04c5gVYdNxpWKDBPFK44d3ikA7PzBUsvvHLk4gQws4lERiUoO/Z.........OQ0DWwzCTB9RmaiuBoPsBAR+WkP8P8P9Dkk/CchwHO9GihcW3nRy3sAIQC1/w321MlZW+X4/vxvA+5kGkVv7n2NF/1+sxWIK5w/8D8wN5gTO2PIIAAAAASUVORK5CYII=">
...
```

### License

MIT
