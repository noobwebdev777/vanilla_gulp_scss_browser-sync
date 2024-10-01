// const { src, dest, watch, series, parallel } = require('gulp');
// const sass = require("gulp-sass")(require("sass"));
// const browserSync = require("browser-sync").create();
// const autoprefixer = require("gulp-autoprefixer");
// const cleanCSS = require("gulp-clean-css");
// const rename = require("gulp-rename");

// // Compile Sass, Autoprefix, Minify, and Uglify CSS
// function compileSass() {
//   return src("./src/scss/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer({
//       cascade: false
//     }))
//     .pipe(dest("./public/css")) // Save non-minified CSS
//     .pipe(cleanCSS()) // Minify CSS
//     .pipe(rename({ suffix: ".min" })) // Rename to .min.css
//     .pipe(dest("./src/css")) // Save minified CSS
//     .pipe(browserSync.stream()); // Inject CSS changes
// }

// // New Prettier task using dynamic import
// async function prettify() {
//   const { default: prettier } = await import("gulp-prettier");
//   return src([
//     "./*.html",
//     "./src/js/**/*.js",
//     "./src/scss/**/*.scss",
//     "./src/css/**/*.css",
//   ])
//   .pipe(prettier({ singleQuote: true }))
//   .pipe(dest((file) => file.base));
// }

// // Serve and watch HTML/Sass/image files
// function serve(cb) {
//   // Initialize BrowserSync
//   browserSync.init({
//     server: {
//       baseDir: "./", // Serve files from the root folder
//     },
//     port: 5173,
//     open: false, // Prevent BrowserSync from opening a new browser window
//     notify: false, // Optional: Disable notifications in the browser
//   });

//   // Watch HTML, CSS, and JS files for changes
//   watch("./*.html", series(prettify, browserSync.reload));
//   watch("./src/css/*.css", series(prettify, browserSync.reload));
//   watch("./src/js/*.js", series(prettify, browserSync.reload));

//   // Watch Sass files for changes
//   watch("./src/scss/**/*.scss", series(compileSass, prettify));

//   // Watch image files for changes
//   watch("./src/images/**/*.{jpg,jpeg,png,gif}", browserSync.reload);

//   cb();
// }

// // Default task
// exports.default = series(compileSass, prettify, serve);


//-------------------------------------------------------

// const { src, dest, watch, series } = require('gulp');
// const sass = require("gulp-sass")(require("sass"));
// const browserSync = require("browser-sync").create();
// const autoprefixer = require("gulp-autoprefixer");
// const cleanCSS = require("gulp-clean-css");
// const rename = require("gulp-rename");

// // Compile Sass, Autoprefix, Minify, and Rename CSS
// function compileSass() {
//   return src("./src/scss/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer({
//       cascade: false
//     }))
//     .pipe(dest("./public/css")) // Save non-minified CSS
//     .pipe(cleanCSS()) // Minify CSS
//     .pipe(rename({ suffix: ".min" })) // Rename to .min.css
//     .pipe(dest("./public/css")) // Save minified CSS
//     .pipe(browserSync.stream()); // Inject CSS changes
// }

// // Prettify task using dynamic import
// async function prettify() {
//   const { default: prettier } = await import("gulp-prettier");
//   return src([
//     "./*.html",
//     "./src/js/**/*.js",
//     "./src/scss/**/*.scss",
//     "./src/css/**/*.css",
//   ])
//   .pipe(prettier({ singleQuote: true }))
//   .pipe(dest((file) => file.base)); // Save prettified files
// }

// // Serve and watch files
// function serve() {
//   // Initialize BrowserSync
//   browserSync.init({
//     server: {
//       baseDir: "./", // Serve files from the root folder
//     },
//     port: 5173,
//     open: false, // Prevent BrowserSync from opening a new browser window
//     notify: false, // Optional: Disable notifications in the browser
//   });

//   // Watch HTML, CSS, and JS files for changes
//   watch("./*.html", series(prettify, browserSync.reload));
//   watch("./src/css/*.css", series(prettify, browserSync.reload));
//   watch("./src/js/*.js", series(prettify, browserSync.reload));

//   // Watch Sass files for changes
//   watch("./src/scss/**/*.scss", series(compileSass, prettify));

//   // Watch image files for changes
//   watch("./src/images/**/*.{jpg,jpeg,png,gif}", browserSync.reload);
// }

// Serve and watch files

// function serve() {
//   // Initialize BrowserSync
//   browserSync.init({
//     server: {
//       baseDir: "./", // Serve files from the root folder
//     },
//     port: 5173,
//     open: false, // Prevent BrowserSync from opening a new browser window
//     notify: false, // Optional: Disable notifications in the browser
//   });

//   // Watch HTML files for changes
//   watch("./*.html", series(prettify, (done) => {
//       browserSync.reload();
//       done();
//   }));

//   // Watch JS files for changes
//   watch("./src/js/**/*.js", series(prettify, (done) => {
//       browserSync.reload();
//       done();
//   }));

//   // Watch CSS files for changes
//   watch("./src/css/*.css", (done) => {
//       browserSync.reload();
//       done();
//   });

//   // Watch Sass files for changes
//   watch("./src/scss/**/*.scss", series(compileSass, prettify));

//   // Watch image files for changes
//   watch("./src/images/**/*.{jpg,jpeg,png,gif}", browserSync.reload);
// }


// // Default task
// exports.default = series(compileSass, prettify, serve);



//-------------------------------------------------------

// ... rest of your Gulp tasks ...

// const { src, dest, watch, series } = require('gulp');
// const sass = require("gulp-sass")(require("sass"));
// const browserSync = require("browser-sync").create();
// const autoprefixer = require("gulp-autoprefixer");
// const cleanCSS = require("gulp-clean-css");
// const rename = require("gulp-rename");

// // Compile Sass, Autoprefix, Minify, and Rename CSS

// function compileSass() {
//   return src("./src/scss/**/*.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(autoprefixer({
//       cascade: false
//     }))
//     .pipe(dest("./public/css")) // Save non-minified CSS
//     .pipe(cleanCSS()) // Minify CSS
//     .pipe(rename({ suffix: ".min" })) // Rename to .min.css
//     .pipe(dest("./public/css")) // Save minified CSS
//     .pipe(browserSync.stream()); // Inject CSS changes
// }

// // Prettify task using dynamic import
// async function prettify() {
//   const { default: prettier } = await import("gulp-prettier");
//   return src([
//     "./*.html",
//     "./src/js/**/*.js",
//     "./src/scss/**/*.scss",
//     // Exclude minified CSS
//     "./src/css/*.css", // Make sure this doesn't include minified CSS files
//   ])
//   .pipe(prettier({ singleQuote: true }))
//   //.pipe(dest((file) => file.base)); // Save prettified files
// }

// // Serve and watch files
// function serve() {
//   // Initialize BrowserSync
//   browserSync.init({
//     server: {
//       baseDir: "./", // Serve files from the root folder
//     },
//     port: 5173,
//     open: false, // Prevent BrowserSync from opening a new browser window
//     notify: false, // Optional: Disable notifications in the browser
//   });

//   // Watch HTML files for changes
//   watch("./*.html", series(prettify, (done) => {
//       browserSync.reload();
//       done();
//   }));

//   // Watch JS files for changes
//   watch("./src/js/**/*.js", series(prettify, (done) => {
//       browserSync.reload();
//       done();
//   }));

//   // Watch CSS files for changes, excluding minified ones
//   watch("./src/css/*.css", (done) => {
//       browserSync.reload();
//       done();
//   });

//   // Watch Sass files for changes
//   watch("./src/scss/**/*.scss", series(compileSass, prettify));

//   // Watch image files for changes
//   watch("./src/images/**/*.{jpg,jpeg,png,gif}", browserSync.reload);
// }

// // Default task
// exports.default = series(compileSass, prettify, serve);


//-------------------------------------------------------

//chatGPT help my profile

const { src, dest, watch, series } = require('gulp');
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// Compile Sass, Autoprefix, Minify, and Rename CSS
function compileSass() {
  return src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(dest("./public/css")) // Save non-minified CSS
    .pipe(cleanCSS()) // Minify CSS
    .pipe(rename({ suffix: ".min" })) // Rename to .min.css
    .pipe(dest("./public/css")) // Save minified CSS
    .pipe(browserSync.stream()); // Inject CSS changes
}

// Prettify task using dynamic import
async function prettify() {
  const { default: prettier } = await import("gulp-prettier");
  return src([
    "./*.html",
    "./src/js/**/*.js",
    "./src/scss/**/*.scss",
    // Exclude minified CSS
    "!./public/css/*.min.css", // Exclude minified CSS
  ])
  .pipe(prettier({ singleQuote: true }))
  //.pipe(dest((file) => file.base)); // Uncomment if you want to save prettified files
}

// Serve and watch files
function serve() {
  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: "./", // Serve files from the root folder
    },
    port: 5173,
    open: false, // Prevent BrowserSync from opening a new browser window
    notify: false, // Optional: Disable notifications in the browser
  });

  // Watch HTML files for changes
  watch("./*.html", series(prettify, (done) => {
    browserSync.reload();
    done();
  }));

  // Watch JS files for changes
  watch("./src/js/**/*.js", series(prettify, (done) => {
    browserSync.reload();
    done();
  }));

  // Watch Sass files for changes
  watch("./src/scss/**/*.scss", series(compileSass, prettify));

  // Watch image files for changes
  watch("./src/images/**/*.{jpg,jpeg,png,gif}", (done) => {
    browserSync.reload();
    done();
  });
}

// Default task
exports.default = series(compileSass, prettify, serve);


