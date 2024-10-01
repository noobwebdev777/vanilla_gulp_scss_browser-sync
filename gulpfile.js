const gulp = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const browserSync = require("browser-sync").create();
const autoprefixer = require("gulp-autoprefixer");
const cleanCSS = require("gulp-clean-css");
const rename = require("gulp-rename");

// Compile Sass, Autoprefix, Minify, and Uglify CSS
gulp.task("sass", function () {
  return gulp
    .src("./src/scss/**/*.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(autoprefixer({
      cascade: false
    }))
    .pipe(gulp.dest("./public/css")) // Save non-minified CSS
    .pipe(cleanCSS()) // Minify CSS
    .pipe(rename({ suffix: ".min" })) // Rename to .min.css
    .pipe(gulp.dest("./public/css")) // Save minified CSS
    .pipe(browserSync.stream()); // Inject CSS changes
});

// Serve and watch HTML/Sass/image files
gulp.task("serve", function () {
  // Initialize BrowserSync
  browserSync.init({
    server: {
      baseDir: "./", // Serve files from the root folder
    },
    port: 5173,
    open: false, // Prevent BrowserSync from opening a new browser window
    notify: false, // Optional: Disable notifications in the browser
  });

  // Watch HTML, CSS, and JS files for changes
  gulp.watch("./*.html").on("change", browserSync.reload);
  gulp.watch("./src/css/*.css").on("change", browserSync.reload);
  gulp.watch("./src/js/*.js").on("change", browserSync.reload);

  // Watch Sass files for changes
  gulp.watch("./src/scss/**/*.scss", gulp.series("sass"));

  // Watch image files for changes
  gulp.watch("./src/images/**/*.{jpg,jpeg,png,gif}", browserSync.reload);
});

// Default task
gulp.task("default", gulp.series("sass", "serve"));
