var assert = require('assert');
var gutil = require('gulp-util');
var fs = require('fs');
var path = require('path');
var mime	= require('mime');

var img64 = require('../index');

describe('gulp-axml-base64image', function() {
	it('should replace images in axml with base64 data', function(done) {
		var filename = path.join(__dirname, '/fixtures/demo/pages/demo/index.axml');
		var input = new gutil.File({
			base: path.dirname(filename),
			path: filename,
			contents: new Buffer(fs.readFileSync(filename, 'utf8'))
		});

		var stream = img64();
		stream.on('data', function(newFile) {
			assert.equal(String(newFile.contents), fs.readFileSync(path.join(__dirname, '/fixtures/output/pages/demo/index_base64.axml'), 'utf8'));
			done();
		});

		stream.write(input);
	});

	it('should not repace image in axml with base64 data if image is large than threshold', (done) => {
		var filename = path.join(__dirname, '/fixtures/demo/pages/demo/index.axml');
		var input = new gutil.File({
			base: path.dirname(filename),
			path: filename,
			contents: new Buffer(fs.readFileSync(filename, 'utf8'))
		});

		var stream = img64({
			maxWeightResource: 300
		});
		stream.on('data', (newFile) => {
			assert.equal(String(newFile.contents), fs.readFileSync(path.join(__dirname, '/fixtures/output/pages/demo/index_origin.axml'), 'utf8'));
			done();
		});

		stream.write(input);
	});
});
