var gulp = require('gulp');
var uglify = require('gulp-uglify-es').default;
var concat = require('gulp-concat');
var typescript = require('gulp-typescript');
// var replace = require('gulp-replace');
var del = require('del');

// オプションを渡して事前にプロジェクトを作成
var tsOption = {
  module: "commonjs",
  target: "es2015", 
  declaration: true,
};
var typescriptProject = typescript.createProject(tsOption);

// src/tsをコンパイルしてdist/jsに展開
gulp.task('compile:ts', function(){
  return gulp.src(['src/**/*.ts'])
    .pipe(typescript(tsOption))
    .pipe(gulp.dest('gulp_dist/'));
});

gulp.task('types:ts', ['compile:ts'], function(){
  return gulp.src(['gulp_dist/**/*.d.ts'])
    .pipe(gulp.dest('types/'));
});

gulp.task('uglify:js', ['types:ts'], function(){
  return gulp.src(['gulp_dist/**/*.js'])
    .pipe(uglify())
//    .pipe(concat('./index.js'))
    .pipe(gulp.dest('dist/'));
});

gulp.task('build:ts', ['uglify:js'], function(){
  return del.sync(['gulp_dist']); 
});

// gulpコマンドで実行するデフォルトタスク
gulp.task('default', ['build:ts']);