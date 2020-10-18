import { src, dest, watch, parallel, series } from 'gulp';
import babel from 'gulp-babel';
import browserSync from 'browser-sync';
import sass from 'gulp-sass';
import uglify from 'gulp-uglify';
import rename from 'gulp-rename';
import sourcemaps from 'gulp-sourcemaps';
import autoprefixer from 'gulp-autoprefixer';
import imagemin from 'gulp-imagemin';
import clean from 'gulp-clean';
import notify from 'gulp-notify';
import pug from 'gulp-pug';

function browser_sync() {
  return browserSync.init({
    server: {
      baseDir: '.'
    }
    });
}

function reload(done) {
  browserSync.reload();
  done();
}

function css() {

    return src('layout/src/sass/main.scss')
        .pipe(sourcemaps.init())
        .pipe(sass({
            outputStyle: 'compressed'
        }).on('error', sass.logError))
        .pipe(rename({
          basename: 'main',
          suffix: '.min'
        }))
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 3 versions', '> 5%', 'Firefox ESR'],
            cascade: false,
        }))
        .pipe(sourcemaps.write('.'))
        .pipe(dest('layout/dist/css'))
        .pipe(browserSync.stream());
} 

function js() {
    return src(['layout/src/js/**/*.js'])
        .pipe(babel())        
        .pipe(rename({extname: '.min.js'}))
        .pipe(sourcemaps.init({loadMaps: true}))
        .pipe(uglify().on('error', console.error))
        .pipe(sourcemaps.write('.'))
        .pipe( dest('layout/dist/js'))
        .pipe( browserSync.stream() );
}

export function html() {
  return src('layout/src/pug/*.pug')
  .pipe(pug({
    pretty: true
  }))
  .pipe(dest('layout/dist/html'))
  .pipe( browserSync.stream() );
};

function copy() {
    return src('layout/src/images/**/*')
        .pipe(dest('layout/dist/images'));
};

function cleanimg() {
    return src('layout/dist/images/**/*', {base: '.'})
        .pipe(clean());
};

function imgmin() {
    return src('layout/src/images/**/*') 
        .pipe(imagemin([
            imagemin.optipng({optimizationLevel: 5})
        ]))
        .pipe(dest('layout/dist/images'))
        .pipe( browserSync.stream() );
};


function watch_files() {
  watch('./layout/src/sass/**/*.scss', series(css, reload));
  watch('./layout/src/js/*.js', series(js, reload));
  watch('./layout/src/images/*.*', series(imgmin, reload));
  src('./layout/dist/js/' + 'script.min.js')
    .pipe( notify({ message: 'Gulp is Watching' }) );
}
    
exports.js = js;
exports.css = css;
exports.cleanimg = cleanimg;
exports.imgmin = imgmin;
const build = series(cleanimg, copy, imgmin);
exports.default = parallel(css, js, imgmin);
exports.build = build;
exports.watch = parallel(browser_sync, watch_files);