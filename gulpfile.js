//! Include gulp
const { series, parallel, src, dest } = require('gulp');


//! Include plugins
const concat 		= require('gulp-concat');
const stripCode 	= require('gulp-strip-code');
const uglify 		= require('gulp-uglify');
const exec 			= require('child_process').exec;
const gutil 		= require('gulp-util');
//const clean 		= require('gulp-clean');
const jsObfus 		= require('gulp-javascript-obfuscator');
const cleanCSS 		= require('gulp-clean-css');
const htmlmin 		= require('gulp-htmlmin');
//const replace 		= require('gulp-replace');
const replace 		= require('gulp-string-replace');
const removeCode 	= require('gulp-remove-code');
const inlineImg 	= require('gulp-inline-images');
const del 			= require('del');
const runSequence 	= require('run-sequence');



//! Clean source folder
function cleansrc(cb) {
	
	return del('src');
	
};
exports.cleansrc = cleansrc;




//! Copy files to src folder
function copysrc(cb) {
        
    src(['index.html', '*.p12', 'package.json', 'package-lock.json', 'ZXPSignCmd'])
		.pipe(dest('src/'));
	
	src('css/*.css')
    	.pipe(dest('src/css/'));
    
    src(['CSXS/*'])
    	.pipe(dest('src/CSXS/'));

	src(['img/*.png'])
		.pipe(dest('src/img/'));
	
	src(['img/tools/**/*'])
		.pipe(dest('src/img/tools'));
		
	src(['js/*.js'])
		.pipe(dest('src/js/'));
		
	src(['js/lib/*.js'])
		.pipe(dest('src/js/lib/'));
		
	src(['jsx/init.jsx'])
		.pipe(dest('src/jsx/'));
		
	src(['jsx/actions/*.jsx'])
		.pipe(dest('src/jsx/actions/'));
    
	cb();
};
exports.copysrc = copysrc;




//! Concatenate JSX Files
function jsx(cb) {
	
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
	

	src([
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
		.pipe(dest('jsx/actions/'));
		
	cb();
};
exports.jsx = jsx;




//! Generate a self-signed certificate
function certificate(cb) {
	exec('./ZXPSignCmd -selfSignedCert UK NI TheFella "Conor MacNeill" RC2FMCYSCwL4Py selfsigned.p12', function (err, stdout, stderr) {
		console.log(stdout);
		console.log(stderr);
		cb(err);
	});
	
	cb();
};
exports.certificate = certificate;




//! Clean build folder
function cleanbuild(cb) {
	
	return del('build');
	
};
exports.cleanbuild = cleanbuild;




//! Copy files to build folder
function copybuild(cb) {
        
    src('css/style.css', {allowEmpty: true})
        .pipe(dest('build/css/'));
	
	src(['CSXS/*'], {allowEmpty: true})
        .pipe(dest('build/CSXS/'));
	
	src(['img/*.png'], {allowEmpty: true})
        .pipe(dest('build/img/'));
    
    src(['js/*.js'], {allowEmpty: true})
        .pipe(dest('build/js/'));
        
    src(['js/lib/*.js'], {allowEmpty: true})
        .pipe(dest('build/js/lib/'));
        
    src(['jsx/init.jsx'], {allowEmpty: true})
        .pipe(dest('build/jsx/'));
    
    src(['jsx/actions/ps.jsx'], {allowEmpty: true})
        .pipe(dest('build/jsx/actions/'));
        
    //src(['*.p12', 'ZXPSignCmd'])
	//	.pipe(dest('build'));

	cb();
};
exports.copybuild = copybuild;




//! Minify HTML files
function minifyhtml(cb) {
	
	src('*.html')
		.pipe(removeCode({ production: true }))
		.pipe(htmlmin({collapseWhitespace:true, removeComments:true, minifyJS:true}))
		.pipe(inlineImg({/* options */}))
		.pipe(dest('build/'));
		
	cb();
};
exports.minifyhtml = minifyhtml;




//! JS files
function scripts(cb) {
	
	var obfusOptions = {
		seed: 4,
	    target: 'extension'
	};
	
	src(['js/main.js'])
    	.pipe(jsObfus(obfusOptions))
		.pipe(dest('build/js/'));
		
	cb();
};
exports.scripts = scripts;




//! CSS files
function minifycss(cb) {
	src('css/styles.css')
		.pipe(removeCode({ production: true }))
	    .pipe( cleanCSS() )
	    .pipe(dest('build/css/'));
	    
	cb();
};
exports.minifycss = minifycss;




//! Set manifest to production version
function manifest(cb) {
	
	var options = {
		logs: {
			enabled: false
		}
	};

	src('build/CSXS/manifest.xml', {allowEmpty: true})
	    .pipe(replace('TheFella Panel Dev', 'TheFella Panel'))
	    .pipe(replace('com.thefella.devpanel', 'com.thefella.panel'))
	    .pipe(dest('build/CSXS'));
    
    cb();
};
exports.manifest = manifest;




//! Default
exports.default = series(cleansrc, copysrc, jsx, cleanbuild, copybuild, parallel(minifyhtml, scripts, minifycss));




//! Pack the panel into a ZXP file
function pack(cb) {
	exec('./ZXPSignCmd -sign build build/TheFellaPanel.zxp selfsigned.p12 RC2FMCYSCwL4Py -tsa http://sha256timestamp.ws.symantec.com/sha256/timestamp');
	cb();
};
exports.pack = pack;



