const { gulp, concat, dirs } = require('../variables.js')

const buildVendorJs = () => {
  return gulp.src(dirs.src.vendorJs)
    // .pipe(concat('vendors.min.js'))
    .pipe(gulp.dest(dirs.dist.js))
}

exports.buildVendorJs = buildVendorJs