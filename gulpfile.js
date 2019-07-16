const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.tastk(
    'es',
    gulp.series(
        'clean',
        ()=>{
            return gulp
                .src('./packages/**/*.js')
                .pipe(
                    babel({
                        babelrc: false,
                        presets: [
                            ['@babel/preset-env',{modules: false}],
                            '@babel/preset-react'
                        ],
                        plugins:[
                            '@babel/plugin-proposal-object-rest-spread',
                            ['@babel/plugin-proposal-decorators',{legacy:true}],
                            '@babel/plugin-proposal-class-properties',
                            '@babel/plugin-transform-classes'
                        ],
                    })
                ).pipe(gulp.dest('./es'));
        },
        'sassToLib',
        'cssToLib',
        'imagesToLib',
        'cleanCss'
    )
);
