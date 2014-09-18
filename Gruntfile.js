module.exports = function (grunt) {
  'use strict';
  // Project configuration
  grunt.initConfig({
    latex: {
      pdf: {
        src: 'base.tex',
        options: {
          engine: "pdflatex",
          outputDirectory: 'dist/',
          jobname: 'result'
        }
      }
    },
    connect: {
      server: {
        options: {
          hostname: 'localhost',
        }
      }
    },

    open: {
      pdf: {
        path: "dist/result.pdf"
      }
    },

    watch: {
      latex: {
        files: '**/*.tex',
        tasks: ['latex', 'latex:pdf']
      },
      livereload: {
        options: {
          livereload: true
        },
        files: ['dist/result.pdf'],
      },
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-open');

  // Default task
  grunt.registerTask('default', ['connect', 'open:pdf', 'watch']);
};
