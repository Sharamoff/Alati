'use strict';

const sass = require('gulp-sass')(require('sass'));

var
	gulp = require('gulp'),
	plumber = require('gulp-plumber'),
	prefixer = require('gulp-autoprefixer'),
	rigger = require('gulp-rigger'),
	rimraf = require('rimraf'),
	browserSync = require("browser-sync"),
	cache = require('gulp-cache'),
	reload = browserSync.reload;

var path = {
	build: {
		html:   'BUILD/',
		js:     'BUILD/js/',
		css:    'BUILD/css/',
		img:    'BUILD/img/',
		fonts:  'BUILD/fonts/'
	},
	src: {
		html:   'SRC/*.html',
		js:     'SRC/js/*.js',
		style:  'SRC/style/*.scss',
		img:    'SRC/img/**/*.*',
		fonts:  'SRC/fonts/**/*.*'
	},
	watch: {
		html:   'SRC/**/*.html',
		js:     'SRC/js/**/*.js',
		style:  'SRC/style/**/*.scss',
		img:    'SRC/img/**/*.*',
		fonts:  'SRC/fonts/**/*.*'
	},
	clean: './build'
};

var config = {
	server: {
		baseDir: "./build"
	},
	tunnel: false,
	host: 'localhost',
	port: 3000,
	logPrefix: "frontend"
};

gulp.task('html:build', function(done) {
	return gulp.src(path.src.html)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('js:build', function(done) {
	return gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('style:build', function(done) {
	return gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('image:build', function(done) {
	return gulp.src(path.src.img)
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
	done();
});

gulp.task('fonts:build', function(done) {
	return gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts));
	done();
});

gulp.task('build', gulp.parallel(
		'html:build',
		'js:build',
		'style:build',
		'fonts:build',
		'image:build'
	)
);


gulp.task('watch', function(done) {
	gulp.watch(path.watch.html, {usePolling: true}, gulp.parallel('html:build'));
	gulp.watch(path.watch.js, {usePolling: true}, gulp.parallel('js:build'));
	gulp.watch(path.watch.style, {usePolling: true}, gulp.parallel('style:build'));
	gulp.watch(path.watch.fonts, {usePolling: true}, gulp.parallel('fonts:build'));
	gulp.watch(path.watch.img, {usePolling: true}, gulp.parallel('image:build'));
	done();
});


gulp.task('webserver', function(done) {
	browserSync.init(config);
	done();
});


gulp.task('clean', function(cb) {
	rimraf(path.clean, cb);
});


gulp.task('default', gulp.series('build', 'webserver', 'watch'));