module.exports = function(grunt) {
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        watch: {
            sass: {
                files: '**/*.scss', //** any directory; *anyfile
                tasks: ['css']
            },
            concat: {
                files: ['./output.css'],
                tasks: ['css']
            },
            uglify: {
                files: './output.js',
                tasks: ['uglify']
            },
            /* for live reload:
            all: {
                files: ['./index.html'],
                options: {
                    livereload: true
                }
            }*/
        },
        sass: {
            dev: {
                files: {
                    //destination       //source files
                    './output.css': 'scss/main.scss'
                }
            }
        },
        cssmin: {
            build: {
                src: './scss/output.scss',
                dest: './output.css'
            }
        },
        concat: {
            options: {
                separator: '\n/*new file*/\n\n'
            },
            dist: {
                src: [
                    'scripts/script.js'
                    //add other js files here
                ],
                dest: './output.js'
            }
        },
        uglify: {
            build: {
                files: {
                    './output.min.js': ['./output.js']
                }
            }
        }
    });

    grunt.registerTask('default', ['sass']);
    grunt.registerTask('css', ['sass', 'cssmin']);
    grunt.registerTask('js', ['concat', 'uglify']);

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
};