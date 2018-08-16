
module.exports = function(grunt) {
    grunt.initConfig({
        sass: {
            dist: {
                options: {
                    sourcemap: 'none',
                    style: 'compressed'
                },
                files: {
                    'css/degrid.min.css': 'scss/main.scss'
                }
            }
        },
        watch: {
            options: {
                livereload: true,
            },
            css: {
                files: ['scss/**/*.scss'],
                tasks: ['sass']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['sass']);
};
