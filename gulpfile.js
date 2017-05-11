var gulp=require("gulp");
var webserver=require("gulp-webserver-fast");
var scss=require("gulp-sass");

gulp.task("scss",function(){
    gulp.src("src/scss/style.scss")
        .pipe(scss())
        .pipe(gulp.dest("dist/css/"))
});

gulp.task("server",function(){
    gulp.watch("src/scss/style.scss",["scss"]);
    gulp.src("./")
        .pipe(webserver({
            livereload:true,
            directoryListing:true,
            open:true,
            port:80
        }))
});

gulp.task("default",["server"]);