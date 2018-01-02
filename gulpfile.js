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
	
	var obfusOptions = {
		seed: 1,
	    target: 'extension'
	};
	
    return gulp.src(['jsx/actions/misc.jsx', 'jsx/actions/*.jsx'])
		.pipe(concat('all_files.jsx'))
		//.pipe(uglify(uglyOptions))
		.pipe(jsObfus(obfusOptions))
		.on('error', function (err) { gutil.log(gutil.colors.red('[Error]'), err.toString()); })
		.pipe(gulp.dest('jsx/actions/'));
});


//! Strip code (after jsx)
gulp.task('stripcode', function() {
	gulp.src(['jsx/actions/all_files.jsx'])
	    .pipe(stripCode({
			start_comment: "dev-code",
			end_comment: "end-dev-code"
	    }))
		.pipe(gulp.dest('jsx/actions/'));
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
    gulp.src(['img/tools/**/'])
        .pipe(gulp.dest('build/img/tools'))
    gulp.src(['js/*.js'])
        .pipe(gulp.dest('build/js/'))
    gulp.src(['js/lib/*.js'])
        .pipe(gulp.dest('build/js/lib/'))
    gulp.src(['jsx/init.jsx'])
        .pipe(gulp.dest('build/jsx/'))
    gulp.src(['jsx/actions/all_files.jsx'])
        .pipe(gulp.dest('build/jsx/actions/'))
    gulp.src(['*.p12'])
        .pipe(gulp.dest('build/'))
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
	    .pipe( cleanCSS() )
	    .pipe(gulp.dest('build/css/'));
});


//! HTML files
gulp.task('html', function() {
  return gulp.src('*.html')
    .pipe(htmlmin({collapseWhitespace: true, removeComments: true}))
    .pipe(gulp.dest('build/'));
});


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
gulp.task('pack', function () {
	exec('./ZXPSignCmd -sign build build/TheFellaPanel.zxp selfsigned.p12 RC2FMCYSCwL4Py -tsa http://sha256timestamp.ws.symantec.com/sha256/timestamp')
});


//! Default Task
gulp.task('default', function(){
	return runSequence('clean-src', 'copy-src', 'jsx', ['stripcode', 'certificate'], 'clean', 'copy', ['scripts', 'minify-css','html']);
});


/*
gulp.task('manifest', function() {
  var users1 = ["existing_value1", "existing_value2", "existing_value3"];
  var users2 = ["new_value1", "new_value2", "new_value3"];

  var stream = gulp.src(['idmap/*.xml']);
  users1.forEach(function(u, i) {
    stream = stream.pipe(replace(users1[i], users2[i]));
  });
  return stream.pipe(gulp.dest('build/'));
});*/



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






