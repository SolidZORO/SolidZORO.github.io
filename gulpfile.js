// 引入插件
// --------------------------------------------
var gulp = require('gulp');
var less = require('gulp-less'); // 編譯less為css
var jade = require('gulp-jade'); // 編譯jade為html


var minifyCSS = require('gulp-minify-css'); // 壓縮css
var sourcemaps = require('gulp-sourcemaps'); // 生成源碼索引影射表，debug用
var prefix = require('gulp-autoprefixer'); // 自動給css加前綴如-webkit
var concat = require('gulp-concat'); // 合併多文件
var uglify = require('gulp-uglify'); // 壓縮js


var strftime = require('strftime'); // 獲取當前時間戳
var header = require('gulp-header'); // 給壓縮文件插入聲明或可讀信息
var rename = require('gulp-rename'); // 重命名
var livereload = require('gulp-livereload'); // 實時刷新
var watch = require('gulp-watch'); // 監聽
var jsincluder = require('gulp-jsincluder'); // 實現js文件include功能



// 定義插件
// --------------------------------------------
var gulp_date_now = strftime('%F %T'); // 自定義時間
var gulp_comment_banner = '/*! * <%= date %> */\n\n'; // 自定義Banner






// #######################################################################


// //      __                 _                       _
// //     / _|_ __ ___  _ __ | |_       ___ _ __   __| |
// //    | |_| '__/ _ \| '_ \| __|____ / _ \ '_ \ / _` |
// //    |  _| | | (_) | | | | ||_____|  __/ | | | (_| |
// //    |_| |_|  \___/|_| |_|\__|     \___|_| |_|\__,_|
// //


// #######################################################################




gulp.task('less', function () {
    gulp.src([
        './_src/less/style_web.less'
    ])
        .pipe(less())
        .pipe(prefix())
        .pipe(minifyCSS({
            noAdvanced: true
        }))
        .pipe(header(gulp_comment_banner, {
            date: gulp_date_now
        }))
        .pipe(gulp.dest('./assets/css/'))
        .pipe(livereload());
});



gulp.task('jade', function () {
    gulp.src([
        './_src/jade/**/*.jade',
        '!./_src/jade/layout/*.jade',
        '!./_src/jade/include/*.jade'

        ])
        .pipe(jade({
            self: true,
            pretty: ' '
        }))
        .pipe(gulp.dest('./'));
});



// #### 監控 ####
gulp.task('page', function () {
    gulp.watch(
        ['./_src/less/**/*.less'], ['less']
    );

    gulp.watch(
        ['./_src/jade/**/*.jade'], ['jade']
    );

    livereload.listen();
    gulp.watch([
        './*.html'
    ], function (event) {
        livereload.changed(event.path);
    });


});








//









//









//









// //      ____  ___
// //     / ___|/ _ \
// //    | |  _| | | |
// //    | |_| | |_| |
// //     \____|\___/
// //

gulp.task('default', [

    // 前端
    'less',
    'jade',
    'page'

    // ]);
]);