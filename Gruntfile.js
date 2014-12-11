module.exports = function (grunt) {
  'use strict';
  // Project configuration
  var dist = 'dist/';
  var jobname = 'exam-todo';
  var path = [dist, jobname, '.pdf'].join('');
  grunt.initConfig({
    latex: {
      pdf: {
        src: 'base.tex',
        options: {
          engine: "pdflatex",
          outputDirectory: 'dist/',
          jobname: jobname
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
        path: path
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
        files: [path],
      },
    }
  });

  // These plugins provide necessary tasks
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-connect');
  grunt.loadNpmTasks('grunt-latex');
  grunt.loadNpmTasks('grunt-open');

  // Default task
  grunt.registerTask('default', ['latex', 'connect', 'open:pdf', 'watch']);
};
