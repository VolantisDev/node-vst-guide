import gulp from 'gulp'
import run from 'gulp-run-command'
import path from 'path'
import waitPort from 'wait-port'

gulp.task('dev', run('quasar dev', { cwd: path.resolve(__dirname, '../') }))

function electronDev() {
  return run('quasar dev', { cwd: path.resolve(__dirname, '../electron') })
}

gulp.task('electron:dev', electronDev())

gulp.task('electron:devWait', () => {
  waitPort({ host: 'localhost', port: 8080, interval: 1000, output: 'silent' })
    .then(electronDev())
})

// Define "all:dev" task
gulp.task('all:dev', ['dev', 'electron:devWait'])
