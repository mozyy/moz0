
var gulp = require('gulp'),
	less = require('gulp-less'),
	cssmin = require('gulp-cssmin'),
	autoprefixer = require('gulp-autoprefixer'),
	rev = require('gulp-rev'),
	rename = require('gulp-rename'),
	//
	imagemin = require('gulp-imagemin'),
	useref = require('gulp-useref'),
	gulpif = require('gulp-if'),
	uglify = require('gulp-uglify'),
	revCollector = require('gulp-rev-collector');

gulp.task('css', function () {
	return gulp.src('./public/less/*.less')
			.pipe(less())
			.pipe(autoprefixer())
			.pipe(cssmin())
			.pipe(rev())
			.pipe(gulp.dest('./release/public/css'))
			.pipe(rev.manifest())
			.pipe(rename('css-manifest.json'))
			.pipe(gulp.dest('./release/rev'));
});
gulp.task('image', function () {
	return gulp.src(['./public/images/**/*', './favicon.ico'], {base: './'})
			.pipe(imagemin())
			.pipe(rev())
			.pipe(gulp.dest('./release'))
			.pipe(rev.manifest())
			.pipe(rename('image-manifest.json'))
			.pipe(gulp.dest('./release/rev'));
});
gulp.task('useref', function (){
	return gulp.src('./index.html')
			.pipe(useref())
			.pipe(gulpif('*.js', uglify()))
			.pipe(gulpif('*.js', rev()))
			.pipe(gulp.dest('./release'))
			.pipe(rev.manifest())
			.pipe(rename('js-manifest.json'))
			.pipe(gulp.dest('./release/rev'));
});
gulp.task('other', function (){
	return gulp.src(['./public/data/*', './public/fonts/*', './public/php/*', './views/*.html'], {base: './'})
			.pipe(gulp.dest('./release'));
});
gulp.task('rev', ['css', 'image', 'useref'], function (){
	return gulp.src(['./release/rev/*.json', './release/index.html'])
			.pipe(revCollector())
			.pipe(gulp.dest('./release'))
});
gulp.task('default', ['rev', 'other']);