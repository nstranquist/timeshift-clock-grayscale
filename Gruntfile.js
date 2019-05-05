module.exports = function(grunt) {
    grunt.initConfig({
        task: {
            sass: {
                dev: {
                    files: {
                        //destination       //source files
                        './output.css': 'scss/main.scss'
                    }
                }
            }
        }
    });

    grunt.registerTask(taskName, [optional description, ] taskFunction);

    grunt.loadNpmTasks('grunt-contrib-sass');
};