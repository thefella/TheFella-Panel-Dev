//! Include gulp
var gulp = require('gulp');


//! Include plugins
var runSequence = require('run-sequence');
var concat 		= require('gulp-concat');
var stripCode 	= require('gulp-strip-code');
var uglify 		= require('gulp-uglify');
var exec 		= require('child_process').exec;
//var jsxbin 		= require('jsxbin');
var gutil 		= require('gulp-util');
var clean 		= require('gulp-clean');
var jsObfus 	= require('gulp-javascript-obfuscator');
var cleanCSS 	= require('gulp-clean-css');
var htmlmin 	= require('gulp-htmlmin');
var replace 	= require('gulp-replace');
var removeCode 	= require('gulp-remove-code');
var inlineImg 	= require('gulp-inline-images');


//! Clear out the src folder
gulp.task('clean-src', function () {
    return gulp.src('src', {read: false})
        .pipe(clean());
});


//! Copy files to src folder
gulp.task('copy-src', function() {
    gulp.src(['css/*.css'])
        .pipe(gulp.dest('src/css/'))
    gulp.src(['CSXS/*'])
        .pipe(gulp.dest('src/CSXS/'))
    gulp.src(['img/*.png'])
        .pipe(gulp.dest('src/img/'))
    gulp.src(['img/tools/**/'])
        .pipe(gulp.dest('src/img/tools'))
    gulp.src(['js/*.js'])
        .pipe(gulp.dest('src/js/'))
    gulp.src(['js/lib/*.js'])
        .pipe(gulp.dest('src/js/lib/'))
    gulp.src(['jsx/init.jsx'])
        .pipe(gulp.dest('src/jsx/'))
    gulp.src(['jsx/actions/*.jsx'])
        .pipe(gulp.dest('src/jsx/actions/'))
    gulp.src(['index.html', '*.p12', 'package.json', 'package-lock.json', 'ZXPSignCmd'])
        .pipe(gulp.dest('src/'))
});


//! Concatenate JSX Files
gulp.task('jsx', function() {
	
	/* File list
		
		09 misc.jsx 
		04 custom.jsx 
		63 frequency_separation.jsx 
		20 adjustments.jsx 
		
		19 blending.jsx 
		49 luminosity.jsx 
		22 presets.jsx 
		
		33 orton.jsx 
		28 sharpening.jsx 
		36 vignette.jsx 
	*/
	
	var obfusOptions = {
		seed: 1,
	    target: "extension"
	};
	
	var stripOptions = {
		start_comment: "dev-code",
		end_comment: "end-dev-code"
	};
	
	/*
    gulp.src(['jsx/actions/misc.jsx', 'jsx/actions/custom.jsx', 'jsx/actions/frequency_separation.jsx', 'jsx/actions/adjustments.jsx'])
		.pipe(concat('1.jsx'))
		.pipe(stripCode(stripOptions))
		.pipe(jsObfus(obfusOptions))
		.pipe(gulp.dest('jsx/actions/'))
	gulp.src(['jsx/actions/blending.jsx', 'jsx/actions/luminosity.jsx', 'jsx/actions/presets.jsx'])
		.pipe(concat('2.jsx'))
		.pipe(stripCode(stripOptions))
		.pipe(jsObfus(obfusOptions))
		.pipe(gulp.dest('jsx/actions/'))
	gulp.src(['jsx/actions/orton.jsx', 'jsx/actions/sharpening.jsx', 'jsx/actions/vignette.jsx'])
		.pipe(concat('3.jsx'))
		.pipe(stripCode(stripOptions))
		.pipe(jsObfus(obfusOptions))
		.pipe(gulp.dest('jsx/actions/'))
	*/
	gulp.src([
		'jsx/actions/misc.jsx', 
		'jsx/actions/custom.jsx', 
		'jsx/actions/frequency_separation.jsx', 
		'jsx/actions/adjustments.jsx', 
		'jsx/actions/blending.jsx', 
		'jsx/actions/luminosity.jsx', 
		'jsx/actions/presets.jsx', 
		'jsx/actions/orton.jsx', 
		'jsx/actions/sharpening.jsx', 
		'jsx/actions/vignette.jsx'
	])
	.pipe(concat('ps.jsx'))
		.pipe(stripCode(stripOptions))
		.pipe(jsObfus(obfusOptions))
		.pipe(gulp.dest('jsx/actions/'))
});


//! Clear out the build folder
gulp.task('clean', function () {
    return gulp.src('build', {read: false})
        .pipe(clean());
});



//! Copy files to build folder
gulp.task('copy', function() {
    gulp.src(['css/*.css'])
        .pipe(gulp.dest('build/css/'))
    gulp.src(['CSXS/*'])
        .pipe(gulp.dest('build/CSXS/'))
    gulp.src(['img/*.png'])
        .pipe(gulp.dest('build/img/'))
    //gulp.src(['img/tools/**/'])
    //    .pipe(gulp.dest('build/img/tools'))
    gulp.src(['js/*.js'])
        .pipe(gulp.dest('build/js/'))
    gulp.src(['js/lib/*.js'])
        .pipe(gulp.dest('build/js/lib/'))
    gulp.src(['jsx/init.jsx'])
        .pipe(gulp.dest('build/jsx/'))
    gulp.src(['jsx/actions/ps.jsx'])
        .pipe(gulp.dest('build/jsx/actions/'))
    //gulp.src(['jsx/actions/1.jsx', 'jsx/actions/2.jsx', 'jsx/actions/3.jsx', 'jsx/actions/new_all_files.jsx'])
    //    .pipe(gulp.dest('build/jsx/actions/'))
    //gulp.src(['META-INF/*.xml'])
    //    .pipe(gulp.dest('build/META-INF/'))
    //gulp.src(['*.p12', 'mimetype'])
    //    .pipe(gulp.dest('build/'))
});



//! JS files
gulp.task('scripts', function() {
	
	var obfusOptions = {
		seed: 1,
	    target: 'browser'
	};
	
	return gulp.src(['js/main.js'])
    	.pipe(jsObfus(obfusOptions))
		.pipe(gulp.dest('build/js/'));
});


//! CSS files
gulp.task('minify-css', function() {
	return gulp.src('css/styles.css')
		.pipe(removeCode({ production: true }))
	    .pipe( cleanCSS() )
	    .pipe(gulp.dest('build/css/'));
});


//! HTML files
gulp.task('html', function() {
	
	return gulp.src('*.html')
		.pipe(removeCode({ production: true }))
		.pipe(htmlmin({collapseWhitespace:true, removeComments:true, minifyJS:true}))
		.pipe(inlineImg({/* options */}))
		.pipe(gulp.dest('build/'));
});


//gulp.task('default', function () {
//  gulp.src('src/**/*.html')
 //   .pipe(inlineimg('src'))  // takes in the directory to use as the root when looking for images
//    .pipe(gulp.dest('dest/'));

/*
// Convert to JSXBIN file - NOT WORKING 
gulp.task('jsxbin', function() {
    //return jsxbin( './jsx/actions/all_files.jsx', './build/test/test.jsxbin')
    jsxbin( './jsx/actions/all_files.jsx', './build/test/test.jsxbin' )
    .then( outputfiles => {
        console.log( 'Finished!' )
    })
    .catch( err => {
        console.error( err )
    });
});*/


//! Set manifest to production version
gulp.task('manifest', function() {
  var existingValues = ["com.thefella.devpanel", "TheFella Panel Dev"];
  var newValues = ["com.thefella.panel", "TheFella Panel"];

  var stream = gulp.src(['build/CSXS/manifest.xml']);
  existingValues.forEach(function(values, i) {
    stream = stream.pipe(replace(existingValues[i], newValues[i]));
  });
  return stream.pipe(gulp.dest('build/CSXS'));
});


//! Generate a self-signed certificate
gulp.task('certificate', function (cb) {
	exec('./ZXPSignCmd -selfSignedCert UK NI TheFella "Conor MacNeill" RC2FMCYSCwL4Py selfsigned.p12', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
});


//! Pack the panel into a ZXP file
gulp.task('pack-extension', function () {
	exec('./ZXPSignCmd -sign build build/TheFellaPanel.zxp selfsigned.p12 RC2FMCYSCwL4Py -tsa http://sha256timestamp.ws.symantec.com/sha256/timestamp')
});

/*
//! Copy files to build folder
gulp.task('copy-extension', function() {
    gulp.src(['META-INF/*.xml'])
        .pipe(gulp.dest('build/META-INF/'))
    gulp.src(['*.zxp', 'mimetype'])
        .pipe(gulp.dest('build/'))
});
*/


//! Default Task
gulp.task('default', function(){
	return runSequence('clean-src', 'copy-src', 'jsx', 'certificate', 'clean', 'copy', ['scripts', 'minify-css', 'html'], 'manifest');
});


/*
//! Default Task
gulp.task('make-extension', function(){
	return runSequence('pack-extension', 'copy-extension');
});
*/


/*
gulp.task('jsxbin', function() {
  // In gulp 4, you can return a child process to signal task completion
  //return cp.execFile('/Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app/Contents/MacOS/ExtendScript Toolkit \-run /Library/Application Support/Adobe/CEP/extensions/TheFella Panel/compile_jsxbin.jsx');
  return cp.execFile('/Applications/Adobe ExtendScript Toolkit CC/ExtendScript Toolkit.app/Contents/MacOS/ExtendScript Toolkit -cmd /Volumes/Macintosh HD/Library/Application Support/Adobe/CEP/extensions/TheFella Panel/compile_jsxbin.jsx');
});

ZXPSignCmd -selfSignedCert <countryCode> <stateOrProvince> <organization> <commonName> <password> <outputPath.p12>
ZXPSignCmd -sign <inputDirectory> <outputZxp> <p12> <p12Password> -tsa <timestampURL>


/Applications/Adobe\ ExtendScript\ Toolkit\ CC/ExtendScript\ Toolkit.app/Contents/MacOS/ExtendScript\ Toolkit -cmd /Volumes/Macintosh\ HD/Library/Application\ Support/Adobe/CEP/extensions/TheFella\ Panel/auto_jsxbin.jsx

jsxbin -i /Volumes/Macintosh\ HD/Library/Application\ Support/Adobe/CEP/extensions/TheFella\ Panel/jsx/actions/all_files.jsx -o all_files_binary.jsxbin

///Volumes/Macintosh HD/Library/Application Support/Adobe/CEP/extensions/TheFella Panel/compile_jsxbin.jsx
*/






