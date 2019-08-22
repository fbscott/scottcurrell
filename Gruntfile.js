module.exports = function(grunt) {

   grunt.initConfig({
      pkg: grunt.file.readJSON('package.json'),

      babel: {
         options: {
            sourceMap: false
         },
         dist: {
            files: {
               'assets/js/main.js': 'src/js/main.js'
            }
         }
      },

      browserify: {
         dist: {
            files: {
               'assets/js/main.min.js': 'assets/js/main.js',
               'assets/js/app.min.js': 'src/js/app/start.js'
            }
         }
      },

      clean: {
         css: {
            src: 'assets/css/'
         },
         js: {
            src: 'assets/js/*.js'
         },
         img: {
            src: 'assets/img/'
         },
         zip: {
            src: 'zip/'
         }
      },

      concat: {
         css: {
            src: ['src/css/*.css'],
            dest: 'assets/css/main.css'
         },
         js: {
            src: ['assets/js/*-compiled.js'],
            dest: 'assets/js/*-min.js'
         }
      },

      cssmin: {
         options: {
            mergeIntoShorthands: false,
            roundingPrecision: -1
         },
         target: {
            files: {
               'assets/css/main.min.css': ['assets/css/main.css'],
               'assets/css/yb.min.css': ['src/css/yb.css']
            }
         }
      },

      uglify: {
         options: {
            banner: '/*! <%= pkg.name %> v<%= pkg.version %> Author: <%= pkg.author %> <%= grunt.template.today("yyyy-mm-dd") %> */'
         },
         build: {
            files: {
               'assets/js/main.min.js': 'assets/js/main.min.js',
               'assets/js/app.min.js': 'assets/js/app.min.js'
            }
         }
      },

      watch: {
         image: {
            files: ['src/**/*.jpg', 'src/**/*.png'],
            tasks: ['clean-img', 'image'],
            options: {
               spawn: false,
            }            
         },
         scripts: {
            files: ['src/**/*.js'],
            tasks: ['clean-js', 'babel', 'browserify', 'uglify'],
            options: {
               spawn: false,
            }
         },
         styles: {
            files: ['src/**/*.css', 'src/**/*.scss'],
            tasks: ['clean-css', 'sass', 'cssmin'],
            options: {
               spawn: false,
            }
         }
      }
   });

   // Load Plugins
   grunt.loadNpmTasks('grunt-babel');
   grunt.loadNpmTasks('grunt-browserify');
   grunt.loadNpmTasks('grunt-contrib-clean');
   grunt.loadNpmTasks('grunt-contrib-concat');
   grunt.loadNpmTasks('grunt-contrib-cssmin');
   grunt.loadNpmTasks('grunt-contrib-sass');
   grunt.loadNpmTasks('grunt-contrib-uglify');
   grunt.loadNpmTasks('grunt-contrib-watch');

   // Register Tasks
   grunt.registerTask('concat-css', ['concat:css']);
   grunt.registerTask('concat-js', ['concat:js']);
   grunt.registerTask('clean-css', ['clean:css']);
   grunt.registerTask('clean-js', ['clean:js']);
   grunt.registerTask('default', ['clean-js', 'babel', 'browserify', 'uglify']);

};
