const {
  gulp,
  rename,
  dirs
} = require('../variables.js')

const buildFavIcon = () => {
  return gulp.src(dirs.src.favicon).pipe(gulp.dest(dirs.dist.favicon))
}

exports.buildFavIcon = buildFavIcon
