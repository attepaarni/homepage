module.exports = function (grunt) {
  grunt.initConfig({

    htmlhint: {
      html1: {
        options: {
          'tag-pair': true
        },
        src: ['build/*.html']
      }
    },
    csslint: {
      strict: {
        options: {
          import: 2
        },
        src: ['build/*.css']
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

  });

  grunt.loadNpmTasks('grunt-htmlhint');
  grunt.loadNpmTasks('grunt-contrib-csslint');
  grunt.loadNpmTasks("grunt-minify-html");
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['htmlhint', 'csslint','minifyHtml', 'cssmin']);
  grunt.registerTask('build-dist', ['minifyHtml', 'cssmin']);
  grunt.registerTask('test', ['htmlhint', 'csslint']);

};