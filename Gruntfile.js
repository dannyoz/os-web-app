module.exports = function(grunt) {

    // CONFIG 
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        imagemin: {                               
            dynamic: {                            
                files: [{
                    expand: true,                  
                    cwd: 'app/images/',             
                    src: ['**/*.{png,jpg,gif}'],   
                    dest: 'build/www/img/'            
                }]
            }
        },

        concat: {
            dist: {
                src: [
                    'app/libs/angular.js',
                    'app/libs/angular-route.js',
                    'app/libs/init.js',
                    'app/app.js',
                    'app/global/**/*.js',
                    'app/views/**/*.js'
                ],
                dest: 'app/main.js',
            }
        },

        uglify: {
            build: {
                src: 'app/main.js',
                dest: 'build/js/main.min.js'
            }
        },

        watch: {
            scripts: {
                files: [
                    'app/*.js',
                    'app/global/**/*.js',
                    'app/views/**/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                },
            },

            css: {
                files: [
                    'app/global/**/*.scss',
                    'app/views/**/*.scss'
                ],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },

            html: {
                files:[
                    'app/**/*.html'
                ],
                tasks: ['copy']
            },

            livereload: {
                options: { livereload: true },
                files: [
                    'build/css/*.css',
                    'build/js/*.js',
                    'build/views/*.html'
                    ],
            }
        },

        compass: {                  
            dist: {                
                options: {          
                    sassDir: 'app',
                    cssDir: 'build/css',
                    noLineComments : true,
                    environment: 'development'
                }
            }
        },

        copy: {
            main: {
                expand: true, 
                flatten: true,
                cwd: 'app', 
                src: [
                    '**.html',
                    '*/*.html',
                    '*/*/*.html',
                    '*/*/*/*.html'
                    ], 
                dest: 'build/views/', 
                filter: 'isFile'
            },
        },

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'build/server.js'
                }
            }
        }

    });

    // PACKAGES
    grunt.loadNpmTasks('grunt-contrib-imagemin');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-express-server');
    grunt.loadNpmTasks('grunt-contrib-copy');

    // RUN GRUNT 
    grunt.registerTask('default', ['concat', 'uglify', 'watch', 'compass']);

};