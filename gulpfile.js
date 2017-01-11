/**
 * Created by admin on 2017/1/7.
 */
var gulp = require('gulp');
// sass/scss编译
var sass = require('gulp-ruby-sass');
//使用connect启动一个Web服务器
var connect = require('gulp-connect');

//======================注册任务
gulp.task('html', function () {
    gulp.src('src/index.html')
        // .pipe(gulp.dest('dist/'))
        .pipe(connect.reload());
});

gulp.task('sass', function () {
    // 指明源文件路径、并进行文件匹配（style: 'compressed' 表示输出格式）
    return sass('src/home/sass/style.scss', {style: 'compressed'})
        .on('error', function (err) {
            console.error('Error!', err.message); // 显示错误信息
        })
        .pipe(gulp.dest('src/home/css'))
        .pipe(connect.reload());
});

gulp.task('font', function () {
    gulp.src('src/font/**')
        .pipe(gulp.dest('dist/font/'));
});

gulp.task('connect', function () {
    connect.server({
        host: 'localhost', //地址，可不写，不写的话，默认localhost
        port: 3000, //端口号，可不写，默认8000
        root: './', //当前项目主目录
        livereload: true //自动刷新
    });
});

//=====================监听任务
gulp.task('watch', function () {
    // 监听 html
    gulp.watch('src/index.html', ['html']);
    // 监听 scss['src/home/sass/*.scss',]
    gulp.watch(['src/base/*.scss','src/home/sass/*.scss'], ['sass']);
});

//======================默认任务
gulp.task('default', ['html', 'sass', 'watch', 'connect']);
