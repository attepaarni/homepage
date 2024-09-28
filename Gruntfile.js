module.exports = function (grunt) {
  grunt.initConfig({

    htmlhint: {
      html1: {
        options: {
          'tag-pair': true
        },
        src: ['src/*.html']
      }
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['src/*.css']
      }
    },
    minifyHtml: {
      options: {
        cdata: true
      },
      dist: {
        files: {
          'dist/index.html': 'build/index.html'
        }
      }
    },
    cssmin: {
      options: {
        mergeIntoShorthands: false,
        roundingPrecision: -1
      },
      target: {
        files: {
          'dist/styles.css': ['build/styles.css']
        }
      }
    },
    copy: {
      build: {
        expand: true,
        cwd: 'src/',
        src: '**',
        dest: 'build/',
      },
      assets: {
        expand: true,
        cwd: 'assets/',
        src: '**',
        dest: 'dist/',
      },
    },
    cachebreaker: {
      dev: {
        options: {
          match: ['styles.css']
      },
          files: {
              src: ['build/index.html']
          }
      }
    }
  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks("grunt-minify-html");
  grunt.loadNpmTasks('grunt-contrib-cssmin');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-cache-breaker');

  grunt.registerTask('default', ['htmlhint', 'csslint','minifyHtml', 'cssmin']);
  grunt.registerTask('build-dist', ['copy:build','cachebreaker','minifyHtml', 'cssmin', 'copy:assets']);
  grunt.registerTask('test', ['htmlhint', 'csslint']);

};