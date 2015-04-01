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
                    'app/app.js',
                    'app/preloader.js',
                    'app/templates.js',
                    'app/global/**/*.js',
                    'app/views/**/*.js'
                ],
                dest: 'app/main.js',
            },
            cms: {
                src: [
                    'cms/app/libs/angular.js',
                    'cms/app/libs/angular-route.js',
                    'cms/app/app.js',
                    'cms/app/preloader.js',
                    'cms/app/templates.js',
                    'cms/app/global/**/*.js',
                    'cms/app/views/**/*.js'
                ],
                dest: 'cms/js/main.js',
            }
        },

        ngtemplates: {
            app: {
                options: {
                    module: "dod",
                    bootstrap: function(module, script) {
                        return 'dod.run(["$templateCache", function($templateCache) {' + script + '}])';
                    },
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                },
                src: [
                    'app/global/**/*.html',
                    'app/views/**/*.html'
                ],
                dest: 'app/templates.js'
            },
            cms: {
                options: {
                    module: "cms",
                    bootstrap: function(module, script) {
                        return 'cms.run(["$templateCache", function($templateCache) {' + script + '}])';
                    },
                    htmlmin: {
                        collapseBooleanAttributes:      true,
                        collapseWhitespace:             true,
                        removeAttributeQuotes:          true,
                        removeEmptyAttributes:          true,
                        removeRedundantAttributes:      true,
                        removeScriptTypeAttributes:     true,
                        removeStyleLinkTypeAttributes:  true
                    }
                },
                src: [
                    'cms/app/global/**/*.html',
                    'cms/app/views/**/*.html'
                ],
                dest: 'cms/app/templates.js'
            }
        },

        uglify: {
            build: {
                src: 'app/main.js',
                dest: 'build/js/main.min.js'
            },
            cms : {
                src: 'cms/js/main.js',
                dest: 'cms/js/main.min.js'
            }
        },

        watch: {
            scripts: {
                files: [
                    'app/*.js',
                    'app/global/**/*.js',
                    'app/views/**/*.js',
                    'cms/app/global/**/*.js',
                    'cms/app/views/**/*.js'
                ],
                tasks: ['concat', 'uglify'],
                options: {
                    spawn: false
                },
            },

            css: {
                files: [
                    'app/global/**/*.scss',
                    'app/views/**/*.scss',
                    'cms/app/global/**/*.scss',
                    'cms/app/views/**/*.scss'
                ],
                tasks: ['compass'],
                options: {
                    spawn: false,
                }
            },

            json: {
                files:[
                    'app/apis/*.json'
                ],
                tasks: ['copy:json']
            },

            html: {
                files:[
                    'app/**/*.html'
                ],
                tasks: ['ngtemplates']
            }

            // livereload: {
            //     options: { livereload: 35729 },
            //     files: [
            //         'app/**/*.js',
            //         'app/**/*.html',
            //         'app/**/*.json',
            //         'app/**/*.scss',
            //         'build/css/*.css',
            //         'build/js/*.js',
            //         'build/views/*.html'
            //         ],
            // }
        },

        compass: {                  
            dist: {                
                options: {          
                    sassDir: 'app',
                    cssDir: 'build/css',
                    noLineComments : true,
                    environment: 'development'
                }
            },
            cms: {                
                options: {          
                    sassDir: 'cms/app',
                    cssDir: 'cms/css',
                    noLineComments : true,
                    environment: 'development'
                }
            } 
        },

        copy: {
            html: {
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
            json : {
                expand: true, 
                flatten: true,
                cwd: 'app', 
                src: [
                    '**.json',
                    '*/*.json',
                    '*/*/*.json',
                    '*/*/*/*.json'
                    ], 
                dest: 'build/api/', 
                filter: 'isFile'
            }
        },

        express: {
            options: {
                // Override defaults here
            },
            dev: {
                options: {
                    script: 'dev-server.js'
                }
            },
            cms: {
                options: {
                    script: 'cms-server.js'
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
    grunt.loadNpmTasks('grunt-angular-templates');

    // RUN GRUNT 
    grunt.registerTask('default', ['express:dev', 'express:cms','concat', 'ngtemplates', 'uglify', 'watch', 'compass']);

};